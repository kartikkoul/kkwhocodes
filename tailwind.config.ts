import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        accent: {
          cyan: "#00B2FF",
          green: "#21d83e",
          purp: "#8f8dfe",
          saffron: "#f7a501",
          yellow: "#fff500",
          teal: "#59BEB8",
          violet: "#4d25b9",
          violetLight: "#9655fe",
        },
      },
      boxShadow: {
        board: "0px 0px 1rem 10px #32b4f536",
        resume: "0px 0px 6px 1px #9655fe36",
        resumeHover: "0px 0px 15px 1px #9655fe36",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(#000, #31225A, #000)",
        "skills-headline":
          "linear-gradient(to right, #4734C1, #C53683, #2DABB4)",
      },
    },
  },
  plugins: [],
};

export default config;
