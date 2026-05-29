"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { meta } from "@/data/portfolio";

// Load Three.js canvas only on client (no SSR)
const ParticleField = dynamic(() => import("./ParticleField"), { ssr: false });

const ROLES = meta.roles;

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  // Cycle through roles
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setRoleIdx((i) => (i + 1) % ROLES.length);
        setVisible(true);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Three.js particle field */}
      <div className="absolute inset-0 z-0 opacity-80">
        <ParticleField />
      </div>

      {/* Radial vignette */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, #04080f 80%)",
        }}
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 z-0 bg-gradient-to-t from-navy-950 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-sans text-xs tracking-[0.25em] uppercase text-gold-500 mb-6"
        >
          {meta.school}
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-cream-50 leading-[0.9] mb-6"
        >
          Hansini
          <br />
          <span className="text-gold-gradient">Gundavarapu</span>
        </motion.h1>

        {/* Animated role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="h-8 mb-10 flex items-center"
        >
          <span
            className={`font-sans text-lg text-cream-200/70 tracking-wide transition-all duration-400 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
            style={{ transition: "opacity 0.4s, transform 0.4s" }}
          >
            {ROLES[roleIdx]}
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="font-sans text-base md:text-lg text-cream-200/50 max-w-xl leading-relaxed mb-12"
        >
          {meta.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex flex-wrap gap-4"
        >
          <button onClick={scrollToAbout} className="btn-primary">
            <span>View Work</span>
          </button>
          <a
            href={meta.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <span>LinkedIn ↗</span>
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex flex-wrap gap-12 mt-20 pt-10 border-t border-white/5"
        >
          {[
            { value: "JPMorgan", label: "Fellowship alum" },
            { value: "1,000+", label: "users served at JumboCode" },
            { value: "$105", label: "CAVA price target pitched" },
            { value: "200+", label: "TEDx attendees coached for" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-serif text-3xl text-gold-500">{s.value}</p>
              <p className="font-sans text-xs text-cream-200/40 mt-1 tracking-wide">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-cream-200/30 hover:text-gold-500 transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <span className="block w-px h-12 bg-gradient-to-b from-gold-500/50 to-transparent mx-auto" />
      </motion.button>
    </section>
  );
}
