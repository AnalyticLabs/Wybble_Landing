import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        primary: "rgb(var(--primary) / <alpha-value>)",
        secondary: "rgb(var(--secondary) / <alpha-value>)",
        highlight: "rgb(var(--highlight) / <alpha-value>)",
        white: "rgb(var(--white) / <alpha-value>)",
      },

      fontSize: {
        base: "16px",
        sm: "14px",
        md: "18px",
        lg: "18px",
      },
      container: {
        center: true,
      },
      width: {
        container: "min(1440px, 90%)",
      },
      fontFamily: {
        sans: ["Red Hat Display", "system-ui", "sans-serif"],
      },
      animation: {
        spinSlow: "spin 10s linear infinite", // Slow rotation
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(21,154,187,0.35)",
      },
    },
  },
  plugins: [
    require("tailwindcss-motion"),
    require("@tailwindcss/container-queries"),
    function ({ addComponents }: any) {
      addComponents({
        ".container": {
          maxWidth: "min(1440px, 90%)",
          marginInline: "auto", // Ensures horizontal centering.
        },
        ".containerPadding": {
          paddingTop: "max(2rem, 5vw)",
          paddingBottom: "max(2rem, 5vw)",
        },
      });
    },
  ],
} satisfies Config;
