import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        aqua: {
          50:  "#e8f9ff",
          100: "#c5f0ff",
          200: "#8ae2ff",
          300: "#5dd3ff",
          400: "#29c5ff",
          500: "#00b0f0",
          600: "#0089bd",
          700: "#00638a",
          800: "#0a2a50",
          900: "#0a1628",
        },
        teal: {
          400: "#00d4aa",
          500: "#00b894",
          600: "#009a7c",
        },
      },
      backdropBlur: {
        xs: "4px",
        glass: "20px",
        heavy: "40px",
      },
      animation: {
        "ripple": "ripple 3s ease-out infinite",
        "blob-drift": "blobDrift 15s ease-in-out infinite alternate",
        "ticker": "ticker 25s linear infinite",
        "bubble-rise": "bubbleRise 5s linear infinite",
        "orb-breathe": "orbBreathe 4s ease-in-out infinite",
        "orbit-spin": "orbitSpin 12s linear infinite",
        "pulse-line": "pulseLine 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        ripple: {
          "0%": { width: "20px", height: "20px", opacity: "0.8" },
          "100%": { width: "260px", height: "260px", opacity: "0" },
        },
        blobDrift: {
          "0%": { transform: "translate(0,0) scale(1)" },
          "100%": { transform: "translate(60px,40px) scale(1.1)" },
        },
        ticker: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        bubbleRise: {
          "0%": { transform: "translateY(100%) translateX(0)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "0.7" },
          "100%": { transform: "translateY(-120px) translateX(30px)", opacity: "0" },
        },
        orbBreathe: {
          "0%, 100%": { boxShadow: "0 0 30px rgba(0,212,170,0.2), 0 0 60px rgba(0,212,170,0.1)", transform: "scale(1)" },
          "50%": { boxShadow: "0 0 50px rgba(0,212,170,0.4), 0 0 100px rgba(0,212,170,0.2)", transform: "scale(1.05)" },
        },
        orbitSpin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.3", transform: "scaleY(1)" },
          "50%": { opacity: "1", transform: "scaleY(1.1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
