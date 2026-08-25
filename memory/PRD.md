# PRD — Wise Tech Installers Website

## Original Problem Statement
Build a 5-page website for "Wise Tech Installers" (tagline: "One Call For All Installations & Repairs") with landing page for SEO. Pages: Home, Services (15 listed services), Service Area (Gauteng), Gallery (client-provided photos + hero usage), Contact with Request-a-Quote form. Professional template, amazing UI. Phone/WhatsApp: 073 052 6871. Quote submissions emailed to owner. Dark navy + amber/gold, award-worthy design (kinetic hero, marquee, numbered chapters, framer-motion, lenis).

## Architecture
- Frontend: React 19 (CRA/craco), react-router-dom (5 routes), framer-motion, lenis, react-fast-marquee, @phosphor-icons/react, lucide-react, Tailwind 3.4, sonner toasts
- Backend: FastAPI on 0.0.0.0:8001, routes under /api
- DB: MongoDB via motor (MONGO_URL/DB_NAME from env) — `quotes` collection
- Email: Emergent-managed Resend proxy (EMERGENT_EMAIL_KEY, EMAIL_FROM_NAME in backend/.env), guardrail-gated send
- Assets: client photos in /app/frontend/public/images/ (5 files) + curated stock (design_guidelines.json)

## User Personas
- Gauteng homeowner needing DStv/satellite/CCTV/gate/aircon work — wants fast quote, phone/WhatsApp contact
- Business owner (Wise Tech) — receives quote requests by email

## Core Requirements (static)
- 5 pages: Home (kinetic hero, marquee, manifesto chapters, featured bento, gallery strip, area teaser, CTA), Services (all 15), Service Area (20 Gauteng areas), Gallery (13 images masonry), Contact (info cards + quote form)
- Floating WhatsApp button (wa.me/27730526871) on all pages
- Quote form → POST /api/quotes → store in Mongo + email owner
- SEO: meta titles/descriptions per page, LocalBusiness JSON-LD

## Implemented
- 2026-08-25: Full site build — all 5 pages, kinetic masked hero reveal, parallax hero, editorial outline-text marquee, numbered manifesto chapters, bento featured services, masonry gallery with client photos, Lenis smooth scroll, glass sticky nav, mobile menu, WhatsApp float, quote form with success state, backend /api/quotes + /api/health, Resend email pipeline (verified 202 Accepted), SEO meta + JSON-LD

## Backlog / Remaining
- P0: Set real OWNER_EMAIL in backend/.env (currently empty — quotes are saved but email notifications are off until owner provides their email address)
- P1: Owner email/logo branding polish, Google Business/Maps embed on Contact
- P1: Pricing guide section per service
- P2: Testimonials/reviews section, before/after slider in Gallery, blog for SEO

## Next Tasks
1. Collect owner's real email → set OWNER_EMAIL → restart backend → verify emailed:true
2. Add testimonials section
3. Add Google Maps embed of Gauteng coverage
