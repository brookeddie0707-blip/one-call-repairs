import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, Phone } from "lucide-react";
import { Seo } from "@/components/Seo";
import { KineticLine, FadeIn, Reveal } from "@/components/Motion";
import { ServiceMarquee } from "@/components/Marquee";
import { Testimonials } from "@/components/Testimonials";
import { BUSINESS, CHAPTERS, SERVICES, GALLERY, AREAS } from "@/data/site";

const FEATURED = [
  { service: SERVICES[0], image: "/images/dstv-dish-installation.jpeg", span: "lg:col-span-2" },
  { service: SERVICES[3], span: "" },
  { service: SERVICES[5], image: "/images/cctv-bullet-camera-install.jpeg", span: "" },
  { service: SERVICES[11], image: "/images/smart-tv-wall-mount-install.jpeg", span: "" },
  { service: SERVICES[7], image: "/images/garage-door-wooden-install.jpeg", span: "" },
];

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

  return (
    <section ref={ref} data-testid="home-hero" className="relative flex min-h-screen items-end overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110" aria-hidden="true">
        <img
          src="/images/dstv-dish-installation.jpeg"
          alt=""
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/30" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-transparent to-transparent" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 lg:px-12 lg:pb-28">
        <FadeIn>
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-gold">
            <span className="inline-block h-px w-10 bg-gold" aria-hidden="true" />
            Gauteng · Installations & Repairs
          </p>
        </FadeIn>

        <h1 className="mt-8 font-display text-[15vw] font-black leading-[0.9] tracking-tight sm:text-[11vw] lg:text-[7.5rem]">
          <KineticLine delay={0.15}>ONE CALL.</KineticLine>
          <KineticLine delay={0.3}>ALL INSTALLATIONS</KineticLine>
          <KineticLine delay={0.45} className="text-gold">
            & REPAIRS.
          </KineticLine>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-md text-base leading-relaxed text-slate-300 md:text-lg">
            DStv, satellite, Extra View & Triple View, CCTV, gate motors, garage doors, aircon,
            painting, waterproofing and TV mounting — sixteen trades, one trusted Gauteng team.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              data-testid="hero-quote-button"
              className="group flex items-center gap-3 rounded-full bg-gold px-7 py-4 text-sm font-bold uppercase tracking-[0.15em] text-navy transition-[transform,background-color] duration-300 hover:-translate-y-1 hover:bg-gold-dark"
            >
              Request a Quote
              <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href={BUSINESS.phoneLink}
              data-testid="hero-call-button"
              className="flex items-center gap-3 rounded-full border border-white/25 px-7 py-4 text-sm font-bold uppercase tracking-[0.15em] text-slate-50 backdrop-blur-sm transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              <Phone size={16} /> {BUSINESS.phoneDisplay}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.05 }}
          className="mt-14 grid grid-cols-3 gap-6 border-t border-white/15 pt-8"
          data-testid="hero-stats"
        >
          {[
            ["16", "Specialist services"],
            ["01", "Call sorts it all"],
            ["100%", "Gauteng covered"],
          ].map(([num, label]) => (
            <div key={label}>
              <p className="font-display text-3xl font-extrabold text-gold md:text-5xl">{num}</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-slate-400 md:text-xs">
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Manifesto = () => (
  <section data-testid="home-manifesto" className="px-6 py-24 lg:px-12 lg:py-40">
    <div className="mx-auto max-w-7xl">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">What we do best</p>
        <h2 className="mt-6 max-w-3xl font-display text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl lg:text-7xl">
          Three crafts. One standard.
        </h2>
      </Reveal>

      <div className="mt-20 space-y-24 lg:mt-32 lg:space-y-36">
        {CHAPTERS.map((ch, i) => (
          <div
            key={ch.num}
            className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-20 ${
              i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <Reveal>
              <div className="group relative overflow-hidden">
                <img
                  src={ch.image}
                  alt={ch.title}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" aria-hidden="true" />
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {ch.tags.map((t) => (
                    <span
                      key={t}
                      className="border border-white/20 bg-navy/60 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-200 backdrop-blur-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="font-display text-7xl font-black text-gold/90 lg:text-8xl">{ch.num}</p>
              <h3 className="mt-4 font-display text-4xl font-extrabold tracking-tight lg:text-5xl">
                {ch.title}
              </h3>
              <p className="mt-6 max-w-md text-base leading-relaxed text-slate-400 md:text-lg">
                {ch.copy}
              </p>
              <Link
                to="/services"
                data-testid={`manifesto-chapter-${ch.num}-link`}
                className="group mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-gold"
              >
                Explore services
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </Reveal>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FeaturedServices = () => (
  <section data-testid="home-featured-services" className="bg-navy-surface px-6 py-24 lg:px-12 lg:py-32">
    <div className="mx-auto max-w-7xl">
      <Reveal className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">Featured work</p>
          <h2 className="mt-6 font-display text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
            Fixed right, first time.
          </h2>
        </div>
        <Link
          to="/services"
          data-testid="featured-view-all-link"
          className="group flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-slate-300 transition-colors duration-300 hover:text-gold"
        >
          All 16 services
          <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </Reveal>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURED.map(({ service: s, image, span }, i) => (
          <Reveal key={s.num} delay={0.08 * i} className={span}>
            <Link
              to="/contact"
              data-testid={`featured-service-${s.num}`}
              className="group relative block h-full min-h-[280px] overflow-hidden border border-white/10 bg-navy"
            >
              {image && (
                <>
                  <img
                    src={image}
                    alt={s.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-45 transition-[opacity,transform] duration-700 group-hover:scale-105 group-hover:opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" aria-hidden="true" />
                </>
              )}
              <div className="relative flex h-full flex-col justify-end p-7">
                <p className="font-display text-sm font-bold text-gold">{s.num}</p>
                <h3 className="mt-2 font-display text-2xl font-extrabold tracking-tight lg:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">{s.blurb}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Get a quote <ArrowUpRight size={14} />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}

        <Reveal delay={0.4}>
          <Link
            to="/services"
            data-testid="featured-all-services-card"
            className="group flex h-full min-h-[280px] flex-col justify-between bg-gold p-7 text-navy transition-[transform,background-color] duration-300 hover:-translate-y-1 hover:bg-gold-dark"
          >
            <p className="font-display text-6xl font-black">16</p>
            <div>
              <h3 className="font-display text-2xl font-extrabold tracking-tight">
                Every service, one team.
              </h3>
              <span className="mt-4 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em]">
                See them all <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </Reveal>
      </div>
    </div>
  </section>
);

const GalleryStrip = () => (
  <section data-testid="home-gallery-strip" className="px-6 py-24 lg:px-12 lg:py-32">
    <div className="mx-auto max-w-7xl">
      <Reveal className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">Recent work</p>
          <h2 className="mt-6 font-display text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
            Proof, not promises.
          </h2>
        </div>
        <Link
          to="/gallery"
          data-testid="gallery-strip-link"
          className="group flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-slate-300 transition-colors duration-300 hover:text-gold"
        >
          Full gallery
          <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </Reveal>

      <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-5">
        {GALLERY.slice(0, 5).map((g, i) => (
          <Reveal key={g.src} delay={0.07 * i} className={i === 0 ? "col-span-2 row-span-2 md:col-span-2" : ""}>
            <div className="group relative h-full min-h-[180px] overflow-hidden border border-white/10">
              <img
                src={g.src}
                alt={g.title}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  i === 0 ? "aspect-square md:aspect-auto md:h-full" : "aspect-[4/3]"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
              <p className="absolute bottom-3 left-3 translate-y-2 text-xs font-semibold text-slate-100 opacity-0 transition-[opacity,transform] duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {g.title}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const AreaTeaser = () => (
  <section data-testid="home-area-teaser" className="border-y border-white/10 bg-navy-surface px-6 py-24 lg:px-12 lg:py-32">
    <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">Service area</p>
        <h2 className="mt-6 font-display text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
          All of Gauteng. <span className="text-gold">One call away.</span>
        </h2>
        <p className="mt-6 max-w-md text-base leading-relaxed text-slate-400 md:text-lg">
          From Sandton to Soweto, Pretoria to Vereeniging — our vans are on the road across the
          province every day.
        </p>
        <Link
          to="/service-area"
          data-testid="area-teaser-link"
          className="group mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-gold"
        >
          See all areas
          <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </Reveal>
      <Reveal delay={0.15}>
        <div className="flex flex-wrap gap-2">
          {AREAS.slice(0, 12).map((a) => (
            <span
              key={a}
              className="border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.15em] text-slate-300 transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              {a}
            </span>
          ))}
          <span className="bg-gold px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-navy">
            + more
          </span>
        </div>
      </Reveal>
    </div>
  </section>
);

const CtaBand = () => (
  <section data-testid="home-cta-band" className="relative overflow-hidden px-6 py-28 lg:px-12 lg:py-40">
    <div
      className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[130px]"
      aria-hidden="true"
    />
    <div className="relative mx-auto max-w-7xl">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">Ready when you are</p>
        <h2 className="mt-6 max-w-4xl font-display text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
          Signal down? Gate stuck? <span className="text-stroke-gold">Make the call.</span>
        </h2>
      </Reveal>
      <Reveal delay={0.2}>
        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href={BUSINESS.phoneLink}
            data-testid="cta-call-button"
            className="group flex items-center gap-3 rounded-full bg-gold px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-navy transition-[transform,background-color] duration-300 hover:-translate-y-1 hover:bg-gold-dark"
          >
            <Phone size={17} /> {BUSINESS.phoneDisplay}
          </a>
          <Link
            to="/contact"
            data-testid="cta-quote-button"
            className="flex items-center gap-3 rounded-full border border-white/25 px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-slate-50 transition-colors duration-300 hover:border-gold hover:text-gold"
          >
            Request a Quote <ArrowRight size={16} />
          </Link>
        </div>
      </Reveal>
    </div>
  </section>
);

export default function Home() {
  return (
    <>
      <Seo
        title="Wise Tech Installers | DStv, CCTV, Gate Motors & Repairs — Gauteng"
        description="One call for all installations & repairs in Gauteng: DStv, satellite dishes, CCTV, gate motors, garage doors, aircon, painting, waterproofing & TV mounting. Call 078 294 7173."
      />
      <Hero />
      <ServiceMarquee />
      <Manifesto />
      <FeaturedServices />
      <GalleryStrip />
      <Testimonials />
      <AreaTeaser />
      <CtaBand />
    </>
  );
}
