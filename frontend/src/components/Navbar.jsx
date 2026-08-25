import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "@/data/site";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      data-testid="site-navbar"
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled || open
          ? "border-b border-white/10 bg-navy-surface/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <Link to="/" data-testid="nav-logo" className="group flex items-baseline gap-2">
          <span className="font-display text-xl font-extrabold tracking-tight text-slate-50">
            WISE<span className="text-gold">TECH</span>
          </span>
          <span className="hidden text-[10px] uppercase tracking-[0.3em] text-slate-400 transition-colors duration-300 group-hover:text-gold sm:block">
            Installers
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              data-testid={link.testid}
              className={({ isActive }) =>
                `text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-300 hover:text-gold ${
                  isActive ? "text-gold" : "text-slate-300"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={BUSINESS.phoneLink}
            data-testid="nav-phone-link"
            className="flex items-center gap-2 text-sm font-medium text-slate-200 transition-colors duration-300 hover:text-gold"
          >
            <Phone size={15} className="text-gold" />
            {BUSINESS.phoneDisplay}
          </a>
          <Link
            to="/contact"
            data-testid="nav-quote-button"
            className="rounded-full bg-gold px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-navy transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-gold-dark"
          >
            Get a Quote
          </Link>
        </div>

        <button
          data-testid="nav-mobile-toggle"
          onClick={() => setOpen(!open)}
          className="text-slate-50 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            data-testid="nav-mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 bg-navy-surface/95 backdrop-blur-xl lg:hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.4 }}
                >
                  <NavLink
                    to={link.to}
                    data-testid={`${link.testid}-mobile`}
                    className={({ isActive }) =>
                      `block py-3 font-display text-2xl font-bold tracking-tight ${
                        isActive ? "text-gold" : "text-slate-50"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <a
                href={BUSINESS.phoneLink}
                data-testid="nav-phone-link-mobile"
                className="mt-4 flex items-center gap-2 text-gold"
              >
                <Phone size={16} /> {BUSINESS.phoneDisplay}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
