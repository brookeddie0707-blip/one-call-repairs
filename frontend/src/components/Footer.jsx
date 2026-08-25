import { Link } from "react-router-dom";
import { Phone, MapPin, Clock } from "lucide-react";
import { BUSINESS, NAV_LINKS, SERVICES } from "@/data/site";

export const Footer = () => (
  <footer data-testid="site-footer" className="border-t border-white/10 bg-navy-surface">
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl font-extrabold tracking-tight">
            WISE<span className="text-gold">TECH</span>
          </p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-slate-400">Installers</p>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-slate-400">
            {BUSINESS.tagline}. Eighteen trades, one trusted team, covering the whole of Gauteng.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Explore</p>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  data-testid={`footer-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-sm text-slate-300 transition-colors duration-300 hover:text-gold"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Top Services</p>
          <ul className="mt-5 space-y-3">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.num}>
                <Link
                  to="/services"
                  className="text-sm text-slate-300 transition-colors duration-300 hover:text-gold"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Contact</p>
          <ul className="mt-5 space-y-4 text-sm text-slate-300">
            <li>
              <a
                href={BUSINESS.phoneLink}
                data-testid="footer-phone-link"
                className="flex items-center gap-3 transition-colors duration-300 hover:text-gold"
              >
                <Phone size={15} className="shrink-0 text-gold" /> {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={15} className="shrink-0 text-gold" /> {BUSINESS.area}
            </li>
            <li className="flex items-center gap-3">
              <Clock size={15} className="shrink-0 text-gold" /> {BUSINESS.hours}
            </li>
          </ul>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="text-stroke mt-20 select-none whitespace-nowrap font-display text-[13vw] font-black leading-none tracking-tight lg:text-[9vw]"
      >
        WISE TECH
      </p>

      <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} Wise Tech Installers. All rights reserved.</p>
        <p className="uppercase tracking-[0.25em]">One call. Every fix. Gauteng.</p>
      </div>
    </div>
  </footer>
);
