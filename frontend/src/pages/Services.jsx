import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Seo } from "@/components/Seo";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Motion";
import { ServiceMarquee } from "@/components/Marquee";
import { SERVICES } from "@/data/site";

export default function Services() {
  return (
    <>
      <Seo
        title="Services | Wise Tech Installers — Gauteng Installations & Repairs"
        description="All 15 services: DStv installations & repairs, satellite dishes, E48-32 fixes, OpenView, CCTV, painting, garage doors, gate motors, aircon, waterproofing, TV mounting & more across Gauteng."
      />
      <PageHeader
        eyebrow="Our services"
        title="Fifteen trades."
        highlight="One team."
        copy="Every installation and repair below is handled by our own technicians — no call centres, no subcontractors, no runaround. Pick your fix and get a same-day response."
      />
      <ServiceMarquee />

      <section data-testid="services-grid" className="px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.num} delay={0.04 * (i % 6)} y={24}>
                  <Link
                    to={`/contact`}
                    state={{ service: s.title }}
                    data-testid={`service-card-${s.num}`}
                    className="group relative flex h-full flex-col overflow-hidden border-b border-r border-white/10 p-8 transition-[background-color] duration-500 hover:bg-white/[0.03] lg:p-10"
                  >
                    {s.image && (
                      <>
                        <img
                          src={s.image}
                          alt={s.title}
                          loading="lazy"
                          className="absolute inset-0 h-full w-full object-cover opacity-35 transition-[opacity,transform] duration-700 group-hover:scale-105 group-hover:opacity-50"
                        />
                        <div
                          className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/30"
                          aria-hidden="true"
                        />
                      </>
                    )}
                    <div className="relative flex items-start justify-between">
                      <span className="font-display text-sm font-bold text-gold">{s.num}</span>
                      <Icon
                        size={30}
                        strokeWidth={1.25}
                        className="text-slate-500 transition-colors duration-500 group-hover:text-gold"
                      />
                    </div>
                    <h2 className="relative mt-8 font-display text-xl font-extrabold leading-tight tracking-tight lg:text-2xl">
                      {s.title}
                    </h2>
                    <p className="relative mt-3 text-sm leading-relaxed text-slate-400">{s.blurb}</p>
                    <span className="relative mt-auto inline-flex items-center gap-2 pt-6 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 transition-colors duration-300 group-hover:text-gold">
                      {s.category} <ArrowUpRight size={13} />
                    </span>
                    <span
                      className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100"
                      aria-hidden="true"
                    />
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="mt-16 flex flex-wrap items-center justify-between gap-6 border border-gold/25 bg-gold/5 p-8 lg:p-12">
            <div>
              <h2 className="font-display text-2xl font-extrabold tracking-tight lg:text-3xl">
                Not sure which service you need?
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                Describe the problem — we'll bring the right tools.
              </p>
            </div>
            <Link
              to="/contact"
              data-testid="services-quote-button"
              className="rounded-full bg-gold px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-navy transition-[transform,background-color] duration-300 hover:-translate-y-1 hover:bg-gold-dark"
            >
              Request a Quote
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
