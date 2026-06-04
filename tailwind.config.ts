import forms from "@tailwindcss/forms";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./config/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: "rgb(var(--color-brand-ink) / <alpha-value>)",
          muted: "rgb(var(--color-brand-muted) / <alpha-value>)",
          canvas: "rgb(var(--color-brand-canvas) / <alpha-value>)",
          surface: "rgb(var(--color-brand-surface) / <alpha-value>)",
          line: "rgb(var(--color-brand-line) / <alpha-value>)",
          primary: "rgb(var(--color-brand-primary) / <alpha-value>)",
          accent: "rgb(var(--color-brand-accent) / <alpha-value>)",
          success: "rgb(var(--color-brand-success) / <alpha-value>)"
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 55px rgb(15 23 42 / 0.08)"
      },
      borderRadius: {
        "2xl": "1rem"
      }
    }
  },
  plugins: [forms]
};

export default config;
