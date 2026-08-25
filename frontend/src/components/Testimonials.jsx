import { Star, Quote } from "lucide-react";
import { Reveal } from "@/components/Motion";
import { TESTIMONIALS } from "@/data/site";

const Stars = ({ rating }) => (
  <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
    {[1, 2, 3, 4, 5].map((n) => (
      <Star
        key={n}
        size={15}
        className={n <= rating ? "fill-gold text-gold" : "fill-transparent text-white/20"}
      />
    ))}
  </div>
);

export const Testimonials = () => (
  <section data-testid="home-testimonials" className="border-t border-white/10 px-6 py-24 lg:px-12 lg:py-32">
    <div className="mx-auto max-w-7xl">
      <Reveal className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">Customer reviews</p>
          <h2 className="mt-6 font-display text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
            Gauteng has spoken.
          </h2>
        </div>
        <div data-testid="testimonials-average" className="flex items-center gap-3">
          <p className="font-display text-5xl font-black text-gold">4.9</p>
          <div>
            <Stars rating={5} />
            <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-slate-400">
              Average rating
            </p>
          </div>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} delay={0.07 * (i % 3)}>
            <figure
              data-testid={`testimonial-card-${i}`}
              className="group flex h-full flex-col border border-white/10 bg-navy-surface p-7 transition-colors duration-300 hover:border-gold/40"
            >
              <Quote size={24} className="text-gold/60" aria-hidden="true" />
              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-slate-300">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-5">
                <Stars rating={t.rating} />
                <p className="mt-3 font-display text-base font-bold tracking-tight text-slate-50">
                  {t.name}
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-slate-400">
                  {t.service} · {t.location}
                </p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
