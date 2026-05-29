"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experience, type Experience as Exp } from "@/data/portfolio";

const typeColors: Record<Exp["type"], string> = {
  finance:     "text-gold-500 border-gold-500/30 bg-gold-500/5",
  engineering: "text-blue-400 border-blue-400/30 bg-blue-400/5",
  leadership:  "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
};

const typeLabels: Record<Exp["type"], string> = {
  finance:     "Finance",
  engineering: "Engineering",
  leadership:  "Leadership",
};

function ExpCard({ exp, index }: { exp: Exp; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-12 py-10 border-b border-white/5 group"
    >
      {/* Left: meta */}
      <div className="flex flex-col gap-2">
        <span className={`tag w-fit ${typeColors[exp.type]}`}>
          {typeLabels[exp.type]}
        </span>
        <p className="font-sans text-xs text-cream-200/40 leading-relaxed mt-1">{exp.period}</p>
        <p className="font-sans text-xs text-cream-200/30">{exp.location}</p>
      </div>

      {/* Right: content */}
      <div>
        <div className="flex flex-wrap items-baseline gap-3 mb-1">
          <h3 className="font-serif text-xl text-cream-100 group-hover:text-gold-400 transition-colors duration-300">
            {exp.company}
          </h3>
        </div>
        <p className="font-sans text-sm text-gold-500/80 italic mb-4">{exp.role}</p>
        <ul className="flex flex-col gap-3">
          {exp.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3 font-sans text-sm text-cream-200/55 leading-relaxed">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-gold-500/60 shrink-0" />
              {b}
            </li>
          ))}
        </ul>
      </div>

      {/* Hover line */}
      <div className="absolute left-0 top-0 w-px h-0 bg-gold-500 group-hover:h-full transition-all duration-500" />
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative z-10">
      {/* Background stripe */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-800/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-sans text-xs tracking-[0.25em] uppercase text-gold-500 mb-4"
        >
          02 — Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-serif text-4xl md:text-5xl text-cream-50 mb-16 max-w-lg leading-tight"
        >
          Where I've put the work in.
        </motion.h2>

        <div>
          {experience.map((exp, i) => (
            <ExpCard key={exp.company + exp.role} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
