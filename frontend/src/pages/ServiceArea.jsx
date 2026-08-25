import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { Seo } from "@/components/Seo";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Motion";
import { AREAS, BUSINESS } from "@/data/site";

export default function ServiceArea() {
  return (
    <>
      <Seo
        title="Service Area — Gauteng Coverage | Wise Tech Installers"
        description="Wise Tech Installers covers all of Gauteng: Johannesburg, Sandton, Pretoria, Centurion, Midrand, Randburg, Soweto, the East Rand, West Rand & Vaal. Call 073 052 6871."
      />
      <PageHeader
        eyebrow="Service area"
        title="All of Gauteng."
        highlight="One call away."
        copy="Our technicians are on the road across the province daily. If you're in Gauteng, you're in our area — same-week bookings and emergency callouts available."
      />

      <section data-testid="service-area-grid" className="px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {AREAS.map((area, i) => (
              <Reveal key={area} delay={0.03 * (i % 8)} y={20}>
                <div
                  data-testid={`area-${area.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group flex h-full items-center justify-between bg-navy p-6 transition-colors duration-500 hover:bg-navy-surface"
                >
                  <div>
                    <p className="font-display text-xs font-bold text-gold/70">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-1 font-display text-lg font-bold tracking-tight text-slate-100 transition-colors duration-300 group-hover:text-gold lg:text-xl">
                      {area}
                    </p>
                  </div>
                  <MapPin size={18} className="text-slate-600 transition-colors duration-300 group-hover:text-gold" />
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 max-w-2xl">
            <p className="text-sm leading-relaxed text-slate-400 md:text-base">
              Suburb not listed? If it's in Gauteng, we almost certainly cover it — including
              estates, complexes, farms and business parks. Call{" "}
              <a href={BUSINESS.phoneLink} className="text-gold underline-offset-4 hover:underline" data-testid="area-phone-link">
                {BUSINESS.phoneDisplay}
              </a>{" "}
              to confirm availability in your street.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-16 grid items-center gap-10 border border-white/10 bg-navy-surface p-8 lg:grid-cols-2 lg:p-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">Fast response</p>
              <h2 className="mt-4 font-display text-3xl font-black leading-tight tracking-tight lg:text-5xl">
                Booked today. <span className="text-gold">Sorted this week.</span>
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-400 md:text-base">
                Tell us what's broken or what you need installed, and we'll schedule a technician
                in your area — often within 24 to 48 hours.
              </p>
              <Link
                to="/contact"
                data-testid="area-quote-button"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-navy transition-[transform,background-color] duration-300 hover:-translate-y-1 hover:bg-gold-dark"
              >
                Get a Quote
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="relative overflow-hidden">
              <img
                src="/images/satellite-dish-kit.jpeg"
                alt="Satellite dish installation kit ready for a Gauteng callout"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" aria-hidden="true" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
