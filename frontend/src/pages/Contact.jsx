import { useLocation } from "react-router-dom";
import { Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react";
import { Seo } from "@/components/Seo";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Motion";
import { QuoteForm } from "@/components/QuoteForm";
import { BUSINESS } from "@/data/site";

const CONTACT_CARDS = [
  {
    icon: Phone,
    label: "Call us",
    value: BUSINESS.phoneDisplay,
    href: BUSINESS.phoneLink,
    testid: "contact-phone-card",
  },
  {
    icon: WhatsappLogo,
    label: "WhatsApp",
    value: "Chat instantly",
    href: BUSINESS.whatsapp,
    testid: "contact-whatsapp-card",
  },
  {
    icon: MapPin,
    label: "Service area",
    value: BUSINESS.area,
    testid: "contact-area-card",
  },
  {
    icon: Clock,
    label: "Working hours",
    value: BUSINESS.hours,
    sub: "Sun: emergency callouts",
    testid: "contact-hours-card",
  },
];

export default function Contact() {
  const { state } = useLocation();
  const defaultService = state?.service || "";

  return (
    <>
      <Seo
        title="Contact & Request a Quote | Wise Tech Installers Gauteng"
        description="Request a quote from Wise Tech Installers — DStv, CCTV, gate motors, garage doors, aircon, painting, waterproofing & TV mounting across Gauteng. Call or WhatsApp 073 052 6871."
      />
      <PageHeader
        eyebrow="Contact"
        title="Let's get it"
        highlight="sorted."
        copy="Tell us what you need installed or repaired and we'll come back with a quote — fast. Prefer to talk? Call or WhatsApp us directly."
      />

      <section data-testid="contact-section" className="px-6 pb-24 lg:px-12 lg:pb-36">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="space-y-4 lg:col-span-2">
            {CONTACT_CARDS.map((c, i) => {
              const Icon = c.icon;
              const inner = (
                <>
                  <Icon size={26} weight="fill" className="shrink-0 text-gold" />
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">
                      {c.label}
                    </p>
                    <p className="mt-1 font-display text-lg font-bold tracking-tight text-slate-50">
                      {c.value}
                    </p>
                    {c.sub && <p className="text-xs text-slate-500">{c.sub}</p>}
                  </div>
                  {c.href && (
                    <ArrowUpRight
                      size={18}
                      className="ml-auto shrink-0 text-slate-600 transition-colors duration-300 group-hover:text-gold"
                    />
                  )}
                </>
              );
              const cls =
                "group flex items-center gap-5 border border-white/10 bg-navy-surface p-6 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-gold/40";
              return (
                <Reveal key={c.label} delay={0.07 * i} y={20}>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      data-testid={c.testid}
                      className={cls}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div data-testid={c.testid} className={cls}>
                      {inner}
                    </div>
                  )}
                </Reveal>
              );
            })}

            <Reveal delay={0.3}>
              <div className="relative overflow-hidden border border-white/10">
                <img
                  src="/images/showmax-explora-setup.jpeg"
                  alt="DStv Explora setup installed by Wise Tech Installers"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" aria-hidden="true" />
                <p className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.25em] text-slate-200">
                  Recent install · Explora + Showmax
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="lg:col-span-3">
            <div className="border border-white/10 bg-navy-surface p-7 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">
                Request a quote
              </p>
              <h2 className="mt-4 font-display text-3xl font-black tracking-tight lg:text-4xl">
                Two minutes now, sorted soon.
              </h2>
              <div className="mt-10">
                <QuoteForm defaultService={defaultService} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
