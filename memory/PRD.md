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

## Update — 25 June 2026 (fork session)
- Added Customer Reviews/Testimonials section on Home page (`components/Testimonials.jsx`): 6 Gauteng reviews with star ratings, 4.9 average badge, placed between GalleryStrip and AreaTeaser.
- Added 5 user-supplied photos to Gallery + `/public/images/`: wise-tech-dstv-promo, signal-setup-installation-wizard (tall), dstv-explora-cable-kit, dstv-dish-decoder-combo, openview-dstv-brands. Gallery now 18 items; also surfaces on Home gallery strip.
- Verified via screenshots: testimonials render with correct star fills; all new gallery images load.

### Remaining backlog
- P1: Google Map embed of Gauteng coverage on Service Area/Contact page
- P2: "From-pricing" guide on popular services (TV mounting, E48-32 fixes)

## Update — 25 June 2026 (later same session)
- Phone number changed everywhere: 073 052 6871 → 078 294 7173 (site.js BUSINESS phoneDisplay/phoneLink/whatsapp wa.me/27782947173, SEO descriptions in Home/ServiceArea/Contact, index.html meta + JSON-LD telephone). Verified no old number remains.
- Added 5 new customer photos: cctv-bullet-camera-install, cctv-dome-camera-install, cctv-system-diagram, smart-tv-wall-mount-install, tv-mount-lounge-install.
- Services page cards now support optional background photo (CCTV #06 + TV Mounting #12 use real photos).
- Home: chapter 02 image + Featured CCTV/TV-mounting cards now use real photos (fixed stale GALLERY index refs).
- Gallery now 23 items. Verified via screenshots.

## Update — 25 June 2026 (third batch)
- Added 5 more customer photos: garage-door-wooden-install, garage-door-navy-install, centurion-d5-smart-gate-motor (tall), centurion-d3-smart-gate-motor, centurion-d5-evo-gate-motor (tall).
- Services page: Garage Doors (#08) and Gate Motors (#09) cards now show real photo backgrounds; Home featured Garage Doors card also uses the wooden door photo.
- Gallery now 28 items. Verified via screenshots.

## Update — 25 June 2026 (services photo mapping)
- Mapped all uploaded photos onto Services page cards: #01 DStv Installs, #02 DStv Repairs (promo), #03 Satellite Dish (dish+decoder combo), #04 E48-32 (signal wizard), #05 OpenView (brands), #13 Extra View (cable kit), #14 LNB (SPACE dish kit), #15 Decoder Repairs (Explora kit) — in addition to existing #06, #08, #09, #12.
- #07 Painting, #10 Aircon, #11 Waterproofing remain icon-only (no uploaded photos for these trades yet).
- Verified via screenshots.
