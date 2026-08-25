import { WhatsappLogo } from "@phosphor-icons/react";
import { BUSINESS } from "@/data/site";

export const WhatsAppFloat = () => (
  <a
    href={BUSINESS.whatsapp}
    target="_blank"
    rel="noopener noreferrer"
    data-testid="whatsapp-float-button"
    aria-label="Chat on WhatsApp"
    className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.35)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(37,211,102,0.5)]"
  >
    <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" aria-hidden="true" />
    <WhatsappLogo size={28} weight="fill" className="relative" />
    <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full border border-white/10 bg-navy-surface/90 px-4 py-2 text-xs font-medium tracking-wide text-slate-200 opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100 md:block">
      Chat to us on WhatsApp
    </span>
  </a>
);
