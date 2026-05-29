@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap');

:root {
  --font-playfair: 'Playfair Display', Georgia, serif;
  --font-inter: 'Inter', system-ui, sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: auto; /* Lenis handles smoothing */
}

body {
  background-color: #04080f;
  color: #f8f2e4;
  font-family: var(--font-inter);
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* ─── Selection ─── */
::selection {
  background: rgba(201, 168, 76, 0.3);
  color: #f8f2e4;
}

/* ─── Scrollbar ─── */
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: #04080f; }
::-webkit-scrollbar-thumb { background: #c9a84c; border-radius: 2px; }

/* ─── Typography helpers ─── */
.font-serif { font-family: var(--font-playfair); }
.font-sans  { font-family: var(--font-inter); }

/* ─── Gold gradient text ─── */
.text-gold-gradient {
  background: linear-gradient(135deg, #e6c355 0%, #c9a84c 50%, #a8893a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ─── Noise texture overlay ─── */
.noise::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.035'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 9999;
  opacity: 0.4;
}

/* ─── Section utility ─── */
.section-padding {
  padding: 7rem 0;
}

@media (max-width: 768px) {
  .section-padding { padding: 5rem 0; }
}

/* ─── Horizontal rule ─── */
.hr-gold {
  border: none;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent);
}

/* ─── Tag pill ─── */
.tag {
  display: inline-block;
  padding: 0.2rem 0.7rem;
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 500;
  border: 1px solid rgba(201,168,76,0.35);
  border-radius: 999px;
  color: #c9a84c;
  background: rgba(201,168,76,0.07);
}

/* ─── Card glass ─── */
.card-glass {
  background: rgba(13, 22, 41, 0.6);
  border: 1px solid rgba(201,168,76,0.12);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

/* ─── Magnetic button hover ─── */
.btn-primary {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 2rem;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border: 1px solid #c9a84c;
  color: #c9a84c;
  transition: all 0.3s ease;
  overflow: hidden;
}

.btn-primary::before {
  content: '';
  position: absolute;
  inset: 0;
  background: #c9a84c;
  transform: translateX(-100%);
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-primary:hover::before { transform: translateX(0); }
.btn-primary:hover { color: #04080f; }
.btn-primary span { position: relative; z-index: 1; }

/* ─── Cursor glow (desktop) ─── */
.cursor-glow {
  pointer-events: none;
  position: fixed;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%);
  transform: translate(-50%, -50%);
  z-index: 0;
  transition: opacity 0.3s;
}
