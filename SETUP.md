# Hansini Gundavarapu — Portfolio Setup Guide

## Folder Structure

```
hansini-portfolio/
├── public/
│   ├── portrait.jpg          ← ADD: your headshot (extracted below)
│   ├── resume.pdf            ← ADD: copy of Hansini_G_Resume26.pdf
│   └── og-image.jpg          ← ADD: 1200×630 OG image for social sharing
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx        ← SEO metadata lives here
│   │   ├── page.tsx          ← Section composition
│   │   └── api/contact/
│   │       └── route.ts      ← Contact form API
│   ├── components/
│   │   ├── CursorGlow.tsx    ← Ambient mouse-follow glow
│   │   ├── SmoothScroll.tsx  ← Lenis + GSAP ScrollTrigger
│   │   ├── Nav.tsx           ← Fixed nav + mobile menu
│   │   ├── Hero.tsx          ← Three.js particle field hero
│   │   ├── ParticleField.tsx ← React Three Fiber canvas
│   │   ├── About.tsx         ← Portrait + bio + education
│   │   ├── Experience.tsx    ← Timeline cards
│   │   ├── Projects.tsx      ← Project grid with hover effects
│   │   ├── Skills.tsx        ← Animated skill bars
│   │   ├── Contact.tsx       ← Form + links
│   │   └── Footer.tsx
│   └── data/
│       └── portfolio.ts      ← ALL CONTENT — edit here
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
└── postcss.config.js
```

---

## Step 1 — Place assets

```bash
# From the repo root:

# 1. Copy your resume PDF
cp /path/to/Hansini_G_Resume26.pdf public/resume.pdf

# 2. Extract the portrait from the PDF and save as:
#    public/portrait.jpg
#    (Recommended: 800×1000px or similar portrait ratio)
#    The portrait appears on page 2 of "Untitled document (8).pdf"
#    Open the PDF, screenshot/export that page, crop the photo, save as portrait.jpg

# 3. Create an OG image (optional but recommended):
#    1200×630px, dark background, name + title
#    Save as: public/og-image.jpg
```

---

## Step 2 — Install dependencies

```bash
cd hansini-portfolio
npm install
```

---

## Step 3 — Run locally

```bash
npm run dev
# → http://localhost:3000
```

---

## Step 4 — Build for production

```bash
npm run build
npm start
```

---

## Step 5 — Deploy to Vercel

### Option A: Vercel CLI (fastest)

```bash
npm i -g vercel
vercel
# Follow prompts — framework auto-detected as Next.js
# Production URL generated instantly
```

### Option B: GitHub → Vercel dashboard

1. Push this folder to a GitHub repo
2. Go to vercel.com → New Project
3. Import the repo, click Deploy
4. Vercel auto-detects Next.js — no config needed

### Environment variables (optional, for contact form emails)

In Vercel dashboard → Settings → Environment Variables:

```
RESEND_API_KEY=re_xxxxxxxxxxxx
```

Then uncomment the Resend block in `src/app/api/contact/route.ts`.

---

## Customization

All content is in **`src/data/portfolio.ts`** — edit that file to update any text, dates, links, skills, or projects. Components read from it automatically.

To update the domain in OG metadata, edit `metadataBase` in `src/app/layout.tsx`.

---

## Tech Stack

| Layer | Library |
|---|---|
| Framework | Next.js 14 App Router |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion + GSAP ScrollTrigger |
| Smooth scroll | Lenis |
| 3D hero | React Three Fiber + Three.js |
| Fonts | Google Fonts (Playfair Display + Inter) |
| Deployment | Vercel |
