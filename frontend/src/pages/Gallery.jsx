import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Seo } from "@/components/Seo";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Motion";
import { GALLERY } from "@/data/site";

export default function Gallery() {
  return (
    <>
      <Seo
        title="Gallery — Our Work | Wise Tech Installers Gauteng"
        description="Real installations and repairs by Wise Tech Installers: DStv dishes, Explora decoders, TV wall mounts, CCTV, gate motors, aircon and more across Gauteng."
      />
      <PageHeader
        eyebrow="Gallery"
        title="Proof, not"
        highlight="promises."
        copy="A look at the gear we install and the work we deliver — real kit, real walls, real Gauteng homes and businesses."
      />

      <section data-testid="gallery-grid" className="px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
            {GALLERY.map((g, i) => (
              <Reveal key={g.src + i} delay={0.05 * (i % 4)} y={24} className="break-inside-avoid">
                <figure
                  data-testid={`gallery-item-${i}`}
                  className="group relative overflow-hidden border border-white/10"
                >
                  <img
                    src={g.src}
                    alt={g.title}
                    loading="lazy"
                    className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                      g.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                    }`}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 translate-y-3 p-4 opacity-0 transition-[opacity,transform] duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">{g.tag}</p>
                    <p className="mt-1 font-display text-sm font-bold tracking-tight text-slate-50">
                      {g.title}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-12">
            <h2 className="max-w-xl font-display text-2xl font-extrabold tracking-tight lg:text-4xl">
              Like what you see? <span className="text-gold">Your place could be next.</span>
            </h2>
            <Link
              to="/contact"
              data-testid="gallery-quote-button"
              className="group flex items-center gap-3 rounded-full bg-gold px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-navy transition-[transform,background-color] duration-300 hover:-translate-y-1 hover:bg-gold-dark"
            >
              Request a Quote
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
