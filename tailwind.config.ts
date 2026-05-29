import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#04080f",
          900: "#080e1a",
          800: "#0d1629",
          700: "#111e38",
          600: "#162647",
        },
        gold: {
          300: "#f0d080",
          400: "#e6c355",
          500: "#c9a84c",
          600: "#a8893a",
          700: "#8b7330",
        },
        cream: {
          50:  "#fdfaf4",
          100: "#f8f2e4",
          200: "#f0e6cc",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans:  ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up":    "fadeUp 0.7s ease forwards",
        "fade-in":    "fadeIn 0.5s ease forwards",
        "spin-slow":  "spin 20s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
