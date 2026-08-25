import {
  Satellite,
  Wrench,
  SatelliteDish,
  Signal,
  Antenna,
  Cctv,
  Paintbrush,
  DoorOpen,
  Cog,
  AirVent,
  Droplets,
  Tv,
  Share2,
  Replace,
  HardDrive,
} from "lucide-react";

export const BUSINESS = {
  name: "Wise Tech Installers",
  tagline: "One Call For All Installations & Repairs",
  phoneDisplay: "078 294 7173",
  phoneLink: "tel:+27782947173",
  whatsapp:
    "https://wa.me/27782947173?text=Hi%20Wise%20Tech%20Installers%2C%20I%27d%20like%20to%20request%20a%20quote.",
  area: "Gauteng, South Africa",
  hours: "Mon – Sat · 07:00 – 18:00",
};

export const SERVICES = [
  { num: "01", title: "DStv Installations", icon: Satellite, category: "Signal & Satellite", image: "/images/dstv-dish-installation.jpeg", blurb: "Full DStv setups — dish alignment, cabling, decoder activation and channel scan, done in one visit." },
  { num: "02", title: "DStv Repairs", icon: Wrench, category: "Signal & Satellite", image: "/images/wise-tech-dstv-promo.jpeg", blurb: "No signal, frozen picture or decoder faults diagnosed and repaired on the spot." },
  { num: "03", title: "Satellite Dish Installation", icon: SatelliteDish, category: "Signal & Satellite", image: "/images/dstv-dish-decoder-combo.jpeg", blurb: "New dishes supplied, mounted and aligned for maximum signal strength in any weather." },
  { num: "04", title: "E48-32 Signal Problem Fix", icon: Signal, category: "Signal & Satellite", image: "/images/signal-setup-installation-wizard.jpeg", blurb: "The dreaded E48-32 no-signal error traced to dish, LNB or cable — and fixed for good." },
  { num: "05", title: "OpenView Installations", icon: Antenna, category: "Signal & Satellite", image: "/images/openview-dish-install.jpeg", blurb: "OpenView dish and decoder installation with all free-to-air channels locked in." },
  { num: "06", title: "CCTV Installations & Repairs", icon: Cctv, category: "Security & Access", image: "/images/cctv-bullet-camera-install.jpeg", blurb: "HD camera systems designed, installed and linked to your phone — plus repairs to existing setups." },
  { num: "07", title: "Painting Services", icon: Paintbrush, category: "Home & Comfort", image: "/images/exterior-painting-job.jpeg", blurb: "Interior and exterior painting with clean lines, quality coatings and tidy workmanship." },
  { num: "08", title: "Garage Door Installation & Repairs", icon: DoorOpen, category: "Security & Access", image: "/images/garage-door-wooden-install.jpeg", blurb: "New garage doors fitted, motors repaired, springs and tracks serviced." },
  { num: "09", title: "Gate Motor Installation", icon: Cog, category: "Security & Access", image: "/images/centurion-d5-smart-gate-motor.jpeg", blurb: "Sliding and swing gate motors installed, programmed and serviced for reliable daily use." },
  { num: "10", title: "Air Conditioning Installations & Repairs", icon: AirVent, category: "Home & Comfort", image: "/images/samsung-aircon-install.jpeg", blurb: "Split-unit aircons installed, regassed and repaired — sized correctly for your rooms." },
  { num: "11", title: "Waterproofing Services", icon: Droplets, category: "Home & Comfort", image: "/images/roof-waterproofing-seal.jpeg", blurb: "Roof, parapet and balcony waterproofing that stops leaks at the source." },
  { num: "12", title: "TV Mounting Services", icon: Tv, category: "Home & Comfort", image: "/images/smart-tv-wall-mount-install.jpeg", blurb: "Any TV, any wall — flush, tilt or full-motion brackets with cables neatly concealed." },
  { num: "13", title: "Extra View Installations", icon: Share2, category: "Signal & Satellite", image: "/images/dstv-explora-cable-kit.jpeg", blurb: "DStv Extra View configured so every room watches independently from one subscription." },
  { num: "14", title: "LNB Replacements", icon: Replace, category: "Signal & Satellite", image: "/images/satellite-dish-kit.jpeg", blurb: "Faulty smart, quad or universal LNBs swapped and signal re-peaked same day." },
  { num: "15", title: "DStv Decoder Repairs", icon: HardDrive, category: "Signal & Satellite", image: "/images/dstv-explora-decoder-kit.jpeg", blurb: "Explora and HD decoder faults — power, HDMI, hard drive and software issues repaired." },
];

export const CHAPTERS = [
  {
    num: "01",
    title: "Signal, perfected.",
    copy: "DStv, OpenView, satellite dishes, Extra View and every cryptic error code in between. We align, we cable, we activate — you just press play.",
    image: "/images/dstv-dish-installation.jpeg",
    tags: ["DStv", "OpenView", "E48-32", "Extra View", "LNB"],
  },
  {
    num: "02",
    title: "Secured & automated.",
    copy: "CCTV you can check from anywhere, garage doors that open first time, and gate motors that never leave you standing in the rain.",
    image: "/images/cctv-dome-camera-install.jpeg",
    tags: ["CCTV", "Garage Doors", "Gate Motors"],
  },
  {
    num: "03",
    title: "Home, elevated.",
    copy: "Painting with crisp edges, aircons sized right, waterproofing that holds through Highveld storms, and TVs mounted dead level.",
    image: "/images/exterior-painting-job.jpeg",
    tags: ["Painting", "Air Conditioning", "Waterproofing", "TV Mounting"],
  },
];

export const AREAS = [
  "Johannesburg", "Sandton", "Randburg", "Roodepoort", "Soweto", "Midrand",
  "Pretoria", "Centurion", "Kempton Park", "Edenvale", "Bedfordview", "Germiston",
  "Boksburg", "Benoni", "Alberton", "Springs", "Krugersdorp", "Vanderbijlpark",
  "Vereeniging", "Brakpan", "Hartbeespoort", "Midstream", "Fourways", "Moreleta Park",
  "Bryanston", "Ferndale", "Lonehill", "Lynnwood", "Northmead", "Carlswald",
  "Garsfontein", "Northcliff",
];

export const GALLERY = [
  { src: "/images/dstv-dish-installation.jpeg", title: "DStv Dish Installation", tag: "Satellite", tall: true },
  { src: "/images/wise-tech-dstv-promo.jpeg", title: "Get Your DStv Fixed With Us", tag: "DStv Repairs" },
  { src: "/images/dstv-dish-decoder-combo.jpeg", title: "Dish, LNB & Explora Combo", tag: "Equipment" },
  { src: "/images/dstv-explora-cable-kit.jpeg", title: "Explora, Cable & Multiswitch Kit", tag: "Equipment" },
  { src: "/images/signal-setup-installation-wizard.jpeg", title: "Decoder Signal Setup On Site", tag: "Signal Fix", tall: true },
  { src: "/images/openview-dstv-brands.jpeg", title: "OpenView & DStv Accredited", tag: "OpenView" },
  { src: "/images/cctv-bullet-camera-install.jpeg", title: "Dahua Bullet Camera Install", tag: "CCTV", tall: true },
  { src: "/images/smart-tv-wall-mount-install.jpeg", title: "Smart TV Wall Mount", tag: "TV Mounting", tall: true },
  { src: "/images/cctv-dome-camera-install.jpeg", title: "Dahua Dome Camera Install", tag: "CCTV", tall: true },
  { src: "/images/tv-mount-lounge-install.jpeg", title: "Lounge TV Installation", tag: "TV Mounting" },
  { src: "/images/cctv-system-diagram.jpeg", title: "CCTV System Layout", tag: "Security" },
  { src: "/images/garage-door-wooden-install.jpeg", title: "Solid Wood Garage Door", tag: "Garage Doors" },
  { src: "/images/garage-door-navy-install.jpeg", title: "Charcoal Panel Garage Door", tag: "Garage Doors" },
  { src: "/images/centurion-d5-smart-gate-motor.jpeg", title: "Centurion D5 Smart Gate Motor", tag: "Gate Motors", tall: true },
  { src: "/images/centurion-d3-smart-gate-motor.jpeg", title: "Centurion D3 Smart+ Gate Motor", tag: "Gate Motors" },
  { src: "/images/centurion-d5-evo-gate-motor.jpeg", title: "Centurion D5 Evo Ready To Fit", tag: "Gate Motors", tall: true },
  { src: "/images/openview-dish-install.jpeg", title: "OpenView Dish Installed", tag: "OpenView" },
  { src: "/images/dstv-multiswitch-install.jpeg", title: "DStv Multiswitch Wiring", tag: "Extra View" },
  { src: "/images/cctv-monitoring-wall.jpeg", title: "CCTV Monitoring Wall", tag: "CCTV", tall: true },
  { src: "/images/tv-bracket-range.jpeg", title: "TV Bracket Range In Stock", tag: "TV Mounting", tall: true },
  { src: "/images/garage-door-stock-rollers.jpeg", title: "Garage Doors Ready To Install", tag: "Garage Doors", tall: true },
  { src: "/images/exterior-painting-job.jpeg", title: "Exterior Painting In Progress", tag: "Painting", tall: true },
  { src: "/images/exterior-painting-prep.jpeg", title: "Wall Prep & Patching", tag: "Painting" },
  { src: "/images/painting-paint-buckets.jpeg", title: "Quality Coatings On Site", tag: "Painting" },
  { src: "/images/samsung-aircon-install.jpeg", title: "Samsung Inverter Aircon Install", tag: "Air Conditioning" },
  { src: "/images/alaska-aircon-install.jpeg", title: "Alaska Split-Unit Install", tag: "Air Conditioning" },
  { src: "/images/roof-waterproofing-seal.jpeg", title: "Roof Waterproofing Seal", tag: "Waterproofing" },
  { src: "/images/roof-coating-red-tiles.jpeg", title: "Tiled Roof Coating Complete", tag: "Waterproofing" },
  { src: "/images/roof-truss-construction.jpeg", title: "Roof Truss Construction", tag: "Roofing" },
  { src: "/images/roof-sheeting-stock.jpeg", title: "Roof Sheeting Ready To Fit", tag: "Roofing" },
  { src: "/images/roofing-timber-delivery.jpeg", title: "Timber Delivery On Site", tag: "Roofing" },
  { src: "/images/satellite-dish-kit.jpeg", title: "Full Satellite Dish Kit", tag: "Equipment" },
  { src: "/images/dstv-explora-decoder-kit.jpeg", title: "Explora Decoder & Fibre Kit", tag: "Equipment" },
  { src: "/images/showmax-explora-setup.jpeg", title: "Explora + Showmax Setup", tag: "Entertainment" },
  { src: "/images/tv-wall-mount-bracket.jpeg", title: "TV Wall Mount Bracket", tag: "TV Mounting" },
  { src: "https://images.unsplash.com/photo-1528499908559-b8e4e8b89bda?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDB8MHwxfHNlYXJjaHwyfHxzYXRlbGxpdGUlMjBkaXNoJTIwc3Vuc2V0fGVufDB8fHx8MTc4NzY3ODE3Mnww&ixlib=rb-4.1.0&q=85", title: "Dish Alignment at Dusk", tag: "Satellite", tall: true },
  { src: "https://images.unsplash.com/photo-1589935447067-5531094415d1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNDR8MHwxfHNlYXJjaHwxfHxjY3R2JTIwc2VjdXJpdHklMjBjYW1lcmElMjBtb2Rlcm58ZW58MHx8fHwxNzg3Njc4MTcyfDA&ixlib=rb-4.1.0&q=85", title: "CCTV Camera Install", tag: "Security" },
  { src: "https://images.pexels.com/photos/7587782/pexels-photo-7587782.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", title: "Flush TV Wall Mount", tag: "TV Mounting" },
  { src: "https://images.unsplash.com/photo-1757219525975-03b5984bc6e8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHwzfHxhaXIlMjBjb25kaXRpb25pbmclMjB3YWxsJTIwdW5pdCUyMG1vZGVybnxlbnwwfHx8fDE3ODc2NzgxNzJ8MA&ixlib=rb-4.1.0&q=85", title: "Split-Unit Aircon Install", tag: "Air Conditioning" },
  { src: "https://images.pexels.com/photos/17158676/pexels-photo-17158676.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", title: "Modern Garage Door", tag: "Garage Doors", tall: true },
  { src: "https://images.unsplash.com/photo-1645005049035-c35644b627ba?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1Mjh8MHwxfHNlYXJjaHwyfHxhdXRvbWF0aWMlMjBzbGlkaW5nJTIwZ2F0ZSUyMGRyaXZld2F5fGVufDB8fHx8MTc4NzY3ODE4MHww&ixlib=rb-4.1.0&q=85", title: "Automatic Sliding Gate", tag: "Gate Motors" },
  { src: "https://images.unsplash.com/photo-1717281234297-3def5ae3eee1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjh8MHwxfHNlYXJjaHwxfHxob3VzZSUyMHBhaW50aW5nJTIwcHJvZmVzc2lvbmFsfGVufDB8fHx8MTc4NzY3ODE4MHww&ixlib=rb-4.1.0&q=85", title: "Interior Repaint", tag: "Painting" },
  { src: "https://images.pexels.com/photos/33020762/pexels-photo-33020762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", title: "Decoder Board Repair", tag: "Repairs" },
];

export const TESTIMONIALS = [
  {
    name: "Thabo M.",
    location: "Soweto",
    service: "DStv Installation",
    rating: 5,
    quote:
      "Called in the morning, dish was up and all channels scanned by lunchtime. Neat cabling and he explained everything. Best installer I've used.",
  },
  {
    name: "Sarah van der Merwe",
    location: "Centurion",
    service: "E48-32 Signal Fix",
    rating: 5,
    quote:
      "Two other guys couldn't sort my E48-32 error. Wise Tech found a faulty LNB in 20 minutes and replaced it on the spot. Signal has been perfect since.",
  },
  {
    name: "Sipho N.",
    location: "Sandton",
    service: "CCTV Installation",
    rating: 5,
    quote:
      "Four cameras installed and linked to my phone in one afternoon. Professional, on time, and the footage is crystal clear even at night.",
  },
  {
    name: "Priya Naidoo",
    location: "Midrand",
    service: "TV Mounting",
    rating: 5,
    quote:
      "65-inch TV mounted dead level with all the cables hidden in the wall. You can't even tell there's a bracket. Very tidy work.",
  },
  {
    name: "Johan B.",
    location: "Boksburg",
    service: "Gate Motor Installation",
    rating: 4,
    quote:
      "Gate motor installed and programmed the same week I called. Fair price, solid workmanship, and he serviced my garage door while he was here.",
  },
  {
    name: "Lerato K.",
    location: "Pretoria",
    service: "OpenView Installation",
    rating: 5,
    quote:
      "OpenView installed for my mom with zero fuss — dish, decoder and all channels working. She's very happy and so am I. Highly recommended.",
  },
];

export const NAV_LINKS = [
  { to: "/", label: "Home", testid: "nav-link-home" },
  { to: "/services", label: "Services", testid: "nav-link-services" },
  { to: "/service-area", label: "Service Area", testid: "nav-link-service-area" },
  { to: "/gallery", label: "Gallery", testid: "nav-link-gallery" },
  { to: "/contact", label: "Contact", testid: "nav-link-contact" },
];
