import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CursorGlow from "@/components/CursorGlow";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL("https://hansini.vercel.app"), // ← update to your domain
  title: {
    default: "Hansini Gundavarapu — Data Science & Quantitative Economics",
    template: "%s | Hansini Gundavarapu",
  },
  description:
    "Junior at Tufts University studying Data Science and Quantitative Economics. JPMorgan CareerED Fellow, JumboCode engineer, equity researcher, and speaker coach.",
  keywords: [
    "Hansini Gundavarapu",
    "Data Science",
    "Quantitative Economics",
    "Tufts University",
    "Equity Research",
    "Financial Modeling",
    "Software Developer",
    "Portfolio",
  ],
  authors: [{ name: "Hansini Gundavarapu" }],
  creator: "Hansini Gundavarapu",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hansini.vercel.app",
    title: "Hansini Gundavarapu — Data Science & Quantitative Economics",
    description:
      "Junior at Tufts University. JPMorgan CareerED Fellow · JumboCode Engineer · Equity Researcher.",
    siteName: "Hansini Gundavarapu",
    images: [
      {
        url: "/og-image.jpg", // Place a 1200×630 OG image in /public
        width: 1200,
        height: 630,
        alt: "Hansini Gundavarapu Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hansini Gundavarapu",
    description: "Data Science & Quant Econ @ Tufts · JPMorgan Fellow · Engineer",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  themeColor: "#04080f",
  colorScheme: "dark",
};

// ─── Root Layout ─────────────────────────────────────────────────────────────
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preload Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="noise bg-navy-950 text-cream-100 antialiased overflow-x-hidden">
        <SmoothScroll>
          <CursorGlow />
          <Nav />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
