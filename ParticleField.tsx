"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { meta } from "@/data/portfolio";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const links = [
    { label: "Email", value: meta.emailPersonal, href: `mailto:${meta.emailPersonal}` },
    { label: "LinkedIn", value: "hansini-gundavarapu", href: meta.linkedin },
    { label: "GitHub", value: "github.com/hansini", href: meta.github },
  ];

  return (
    <section id="contact" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-sans text-xs tracking-[0.25em] uppercase text-gold-500 mb-4"
        >
          05 — Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-serif text-4xl md:text-5xl text-cream-50 mb-4 leading-tight"
        >
          Let's connect.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-sans text-sm text-cream-200/40 mb-16 max-w-lg leading-relaxed"
        >
          I'm open to opportunities in finance and data analytics — particularly in markets research,
          equity research, asset management, and fintech. If something seems like a fit, reach out.
        </motion.p>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >
            {[
              { name: "name", label: "Name", type: "text", placeholder: "Your name" },
              { name: "email", label: "Email", type: "email", placeholder: "your@email.com" },
            ].map((field) => (
              <div key={field.name} className="flex flex-col gap-2">
                <label className="font-sans text-xs tracking-widest uppercase text-cream-200/30">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  value={form[field.name as keyof typeof form]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required
                  className="bg-transparent border border-white/10 focus:border-gold-500/50 outline-none px-4 py-3 font-sans text-sm text-cream-100 placeholder:text-cream-200/20 transition-colors duration-300"
                />
              </div>
            ))}

            <div className="flex flex-col gap-2">
              <label className="font-sans text-xs tracking-widest uppercase text-cream-200/30">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What's on your mind?"
                required
                rows={5}
                className="bg-transparent border border-white/10 focus:border-gold-500/50 outline-none px-4 py-3 font-sans text-sm text-cream-100 placeholder:text-cream-200/20 transition-colors duration-300 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="btn-primary self-start mt-2 disabled:opacity-50"
            >
              <span>
                {status === "idle" && "Send Message →"}
                {status === "sending" && "Sending..."}
                {status === "sent" && "Message sent ✓"}
                {status === "error" && "Try again ↻"}
              </span>
            </button>
          </motion.form>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col gap-8 lg:pl-16 lg:border-l border-white/5"
          >
            <div>
              <p className="font-sans text-xs tracking-widest uppercase text-cream-200/30 mb-6">
                Or find me at
              </p>
              <div className="flex flex-col gap-6">
                {links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target={l.label !== "Email" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-1 border-b border-white/5 pb-6 hover:border-gold-500/30 transition-colors duration-300"
                  >
                    <span className="font-sans text-xs text-cream-200/30 tracking-widest uppercase">
                      {l.label}
                    </span>
                    <span className="font-serif text-lg text-cream-100 group-hover:text-gold-400 transition-colors duration-300">
                      {l.value} ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Resume download */}
            <div className="mt-auto">
              <p className="font-sans text-xs tracking-widest uppercase text-cream-200/30 mb-4">
                Resume
              </p>
              <a
                href="/resume.pdf"
                download
                className="btn-primary inline-flex"
              >
                <span>Download PDF ↓</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
