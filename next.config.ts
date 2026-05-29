"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { projects, type Project } from "@/data/portfolio";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative card-glass p-7 flex flex-col gap-4 cursor-default overflow-hidden group"
    >
      {/* Background shimmer on hover */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent pointer-events-none"
      />

      {/* Top row */}
      <div className="flex items-start justify-between gap-4 relative z-10">
        <span className="font-sans text-xs text-cream-200/30 tracking-wide">
          {project.category}
        </span>
        {project.highlight && (
          <span className="tag shrink-0">{project.highlight}</span>
        )}
      </div>

      {/* Title */}
      <h3 className="font-serif text-xl text-cream-100 group-hover:text-gold-400 transition-colors duration-300 relative z-10">
        {project.title}
      </h3>

      {/* Description */}
      <p className="font-sans text-sm text-cream-200/50 leading-relaxed flex-1 relative z-10">
        {project.description}
      </p>

      {/* Tools */}
      <div className="flex flex-wrap gap-2 relative z-10 pt-2 border-t border-white/5">
        {project.tools.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>

      {/* Animated bottom border */}
      <motion.div
        animate={{ scaleX: hovered ? 1 : 0 }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.4 }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-gold-500/60 to-transparent origin-left"
      />
    </motion.div>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-sans text-xs tracking-[0.25em] uppercase text-gold-500 mb-4"
        >
          03 — Projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-serif text-4xl md:text-5xl text-cream-50 mb-4 leading-tight"
        >
          Things I've built.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-sans text-sm text-cream-200/40 mb-16 max-w-lg"
        >
          A selection of technical and creative work spanning data, finance, and engineering.
        </motion.p>

        {/* Featured — larger cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {featured.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>

        {/* Additional projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {rest.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
