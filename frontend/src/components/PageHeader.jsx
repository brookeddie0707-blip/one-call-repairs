import { motion } from "framer-motion";
import { KineticLine, FadeIn } from "@/components/Motion";

export const PageHeader = ({ eyebrow, title, highlight, copy }) => (
  <section className="relative overflow-hidden px-6 pb-16 pt-40 lg:px-12 lg:pb-24 lg:pt-52">
    <div
      className="pointer-events-none absolute -top-40 right-0 h-[480px] w-[480px] rounded-full bg-gold/10 blur-[140px]"
      aria-hidden="true"
    />
    <div className="mx-auto max-w-7xl">
      <FadeIn>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">{eyebrow}</p>
      </FadeIn>
      <h1 className="mt-6 font-display text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
        <KineticLine delay={0.1}>{title}</KineticLine>
        {highlight && (
          <KineticLine delay={0.25} className="text-gold">
            {highlight}
          </KineticLine>
        )}
      </h1>
      {copy && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg"
        >
          {copy}
        </motion.p>
      )}
    </div>
  </section>
);
