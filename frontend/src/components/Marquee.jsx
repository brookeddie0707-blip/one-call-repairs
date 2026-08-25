import Marquee from "react-fast-marquee";
import { SERVICES } from "@/data/site";

export const ServiceMarquee = () => (
  <section
    data-testid="service-marquee"
    className="overflow-hidden border-y border-white/10 bg-navy-surface py-7"
    aria-label="Our services"
  >
    <Marquee speed={32} gradient={false} pauseOnHover>
      {SERVICES.map((s, i) => (
        <span key={s.num} className="flex items-center">
          <span
            className={`mx-8 font-display text-2xl font-extrabold uppercase tracking-tight md:text-4xl ${
              i % 3 === 1 ? "text-stroke-gold" : "text-stroke"
            }`}
          >
            {s.title}
          </span>
          <span className="text-xl text-gold md:text-2xl" aria-hidden="true">
            //
          </span>
        </span>
      ))}
    </Marquee>
  </section>
);
