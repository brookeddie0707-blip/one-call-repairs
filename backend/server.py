from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import re
import ipaddress
import logging
import httpx
from pathlib import Path
from pydantic import BaseModel, Field
from typing import Optional
import uuid
from datetime import datetime, timezone
from html import escape
from html.parser import HTMLParser
from urllib.parse import urlparse

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

EMAIL_BASE_URL = "https://integrations.emergentagent.com"
EMAIL_KEY = os.environ["EMERGENT_EMAIL_KEY"]
EMAIL_FROM_NAME = os.environ["EMAIL_FROM_NAME"]
OWNER_EMAIL = os.environ.get("OWNER_EMAIL", "")

_SHORTENERS = ("bit.ly", "tinyurl.com", "t.co", "is.gd", "cutt.ly", "goo.gl", "rebrand.ly")
_CRED_ASK = ("reply with your password", "reply with the code", "send your password", "cvv",
             "send us your password", "enter your password below", "confirm your card number",
             "your full card number", "seed phrase", "recovery phrase", "verify your card",
             "social security number", "confirm your bank details")
_HOSTISH = re.compile(r"\b(?:https?://)?((?:[a-z0-9-]+\.)+[a-z]{2,})", re.I)


def _host_ok(host: str) -> bool:
    if not host or "xn--" in host:
        return False
    try:
        ipaddress.ip_address(host)
        return False
    except ValueError:
        pass
    return not any(host == s or host.endswith("." + s) for s in _SHORTENERS)


def _same_site(shown: str, real: str) -> bool:
    return shown == real or real.endswith("." + shown) or shown.endswith("." + real)


class _EmailScan(HTMLParser):
    def __init__(self):
        super().__init__()
        self.tags, self.urls, self.anchors = set(), [], []
        self._href, self._text = None, []

    def handle_starttag(self, tag, attrs):
        self.tags.add(tag.lower())
        self.urls += [v for k, v in attrs if k.lower() in ("href", "src") and v]
        if tag.lower() == "a":
            self._href = dict((k.lower(), v) for k, v in attrs).get("href")
            self._text = []

    def handle_data(self, data):
        if self._href is not None:
            self._text.append(data)

    def handle_endtag(self, tag):
        if tag.lower() == "a" and self._href is not None:
            self.anchors.append((self._href, "".join(self._text)))
            self._href, self._text = None, []


def _assert_safe_email(subject: str, html: str) -> None:
    scan = _EmailScan()
    scan.feed(html)
    if scan.tags & {"form", "input", "textarea", "select"}:
        raise ValueError("No forms or input fields in email (G2)")
    body = f"{subject}\n{html}".lower()
    for p in _CRED_ASK:
        if p in body:
            raise ValueError(f"Email asks the recipient for credentials: {p!r} (G2)")
    for url in scan.urls:
        low = url.strip().lower()
        if low.startswith(("mailto:", "tel:", "cid:", "#")):
            continue
        if not low.startswith("https://"):
            raise ValueError(f"Email links/assets must be absolute https: {url!r} (G3)")
        host = urlparse(low).hostname or ""
        if not _host_ok(host) or urlparse(low).username is not None:
            raise ValueError(f"Shortened, numeric-host or credential-bearing URL: {url!r} (G3)")
    for href, text in scan.anchors:
        real = urlparse(href.strip().lower()).hostname or ""
        if not real:
            continue
        for m in _HOSTISH.finditer(text):
            if not _same_site(m.group(1).lower(), real):
                raise ValueError(f"Anchor text {m.group(1)!r} != real link host {real!r} (G3)")


async def send_email(*, to: str, subject: str, html: str, reply_to: str | None = None) -> str | None:
    _assert_safe_email(subject, html)
    payload = {"to": [to], "subject": subject, "html": html, "from_name": EMAIL_FROM_NAME}
    if reply_to:
        payload["contact_email"] = reply_to
    try:
        async with httpx.AsyncClient(timeout=30) as client_http:
            resp = await client_http.post(
                f"{EMAIL_BASE_URL}/api/v1/email/send",
                headers={"X-Email-Key": EMAIL_KEY},
                json=payload,
            )
        resp.raise_for_status()
        return resp.json().get("id")
    except httpx.HTTPStatusError as e:
        logger.error(f"Email send failed: {e.response.status_code} {e.response.text}")
        raise HTTPException(status_code=502, detail="Failed to send email")
    except Exception as e:
        logger.error(f"Email send error: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to send email")


SERVICES = [
    "DStv Installations", "DStv Repairs", "Satellite Dish Installation",
    "E48-32 Signal Problem Fix", "OpenView Installations", "CCTV Installations & Repairs",
    "Painting Services", "Garage Door Installation & Repairs", "Gate Motor Installation",
    "Air Conditioning Installations & Repairs", "Waterproofing Services", "TV Mounting Services",
    "Extra View Installations", "LNB Replacements", "DStv Decoder Repairs", "General Enquiry",
]


class QuoteCreate(BaseModel):
    name: str = Field(min_length=2, max_length=100)
    phone: str = Field(min_length=7, max_length=25)
    email: Optional[str] = Field(default=None, max_length=120)
    service: str = Field(default="General Enquiry", max_length=80)
    area: str = Field(default="", max_length=120)
    message: Optional[str] = Field(default="", max_length=2000)


@api_router.get("/health")
async def health():
    return {"status": "ok", "service": "wise-tech-installers"}


@api_router.post("/quotes")
async def create_quote(input: QuoteCreate):
    service = input.service if input.service in SERVICES else "General Enquiry"
    quote_id = str(uuid.uuid4())
    doc = {
        "quote_id": quote_id,
        "name": input.name.strip(),
        "phone": input.phone.strip(),
        "email": (input.email or "").strip(),
        "service": service,
        "area": input.area.strip(),
        "message": (input.message or "").strip(),
        "created_at": datetime.now(timezone.utc).isoformat(),
        "emailed": False,
    }
    await db.quotes.insert_one(doc)

    if OWNER_EMAIL:
        e_name, e_phone = escape(doc["name"]), escape(doc["phone"])
        e_email, e_area = escape(doc["email"]), escape(doc["area"])
        e_msg = escape(doc["message"]).replace("\n", "<br>") or "—"
        subject = f"New quote request — {service}"
        html = (
            '<table role="presentation" width="100%" cellpadding="0" cellspacing="0">'
            '<tr><td style="padding:24px;font-family:Arial,sans-serif;background:#0A1121;color:#F8FAFC">'
            f'<h2 style="margin:0 0 4px;color:#E5A93C">{escape(service)}</h2>'
            f'<p style="margin:0 0 16px;color:#94A3B8;font-size:13px">New quote request via the {escape(EMAIL_FROM_NAME)} website</p>'
            '<table role="presentation" cellpadding="6" cellspacing="0" style="font-size:14px;color:#F8FAFC">'
            f'<tr><td style="color:#94A3B8">Name</td><td>{e_name}</td></tr>'
            f'<tr><td style="color:#94A3B8">Phone</td><td><a href="tel:{e_phone}" style="color:#E5A93C">{e_phone}</a></td></tr>'
            f'<tr><td style="color:#94A3B8">Email</td><td>{e_email or "—"}</td></tr>'
            f'<tr><td style="color:#94A3B8">Area</td><td>{e_area or "—"}</td></tr>'
            f'<tr><td style="color:#94A3B8">Message</td><td>{e_msg}</td></tr>'
            '</table>'
            f'<p style="font-size:12px;color:#94A3B8;margin-top:20px">Sent by the {escape(EMAIL_FROM_NAME)} website quote form. '
            'We never ask for passwords or card details by email.</p>'
            '</td></tr></table>'
        )
        await send_email(to=OWNER_EMAIL, subject=subject, html=html)
        await db.quotes.update_one({"quote_id": quote_id}, {"$set": {"emailed": True}})
        doc["emailed"] = True

    return {"status": "success", "quote_id": quote_id, "emailed": doc["emailed"]}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
