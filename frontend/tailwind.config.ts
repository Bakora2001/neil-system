import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "neil-navy": "#1A237E",
        "neil-orange": "#ef9d4a",
        "neil-cream": "#FDF5EC",
        "neil-peach": "#FDEBD0",
        "neil-ink": "#101828",
        // legacy aliases kept for compatibility
        "ndip-navy": "#1A237E",
        "ndip-orange": "#ef9d4a",
        "ndip-orange-alt": "#ef9d4a",
        "ndip-cream": "#FDF5EC",
        "ndip-ink": "#101828",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
      },
      boxShadow: {
        card: "0 4px 24px rgba(16, 24, 40, 0.06)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-in-out forwards",
        "type-cursor": "blink 1s step-end infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
