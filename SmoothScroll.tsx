"use client";

import { motion } from "framer-motion";
import { meta } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-serif text-cream-200/30 text-sm">
          © {year} Hansini Gundavarapu
        </p>
        <div className="flex items-center gap-6">
          <a
            href={meta.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs tracking-widest uppercase text-cream-200/30 hover:text-gold-500 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={meta.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs tracking-widest uppercase text-cream-200/30 hover:text-gold-500 transition-colors"
          >
            GitHub
          </a>
          <a
            href={`mailto:${meta.emailPersonal}`}
            className="font-sans text-xs tracking-widest uppercase text-cream-200/30 hover:text-gold-500 transition-colors"
          >
            Email
          </a>
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-sans text-xs tracking-widest uppercase text-cream-200/20 hover:text-gold-500 transition-colors"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}
