import type { Config } from "tailwindcss";

const customColors = {
  "blue-main": "#1f80f0",
  "blue-secondary": "#002045",
  "blue-tertiary": "#00152D",
  "blue-medium-light": "#B9D9FF",
  "blue-light": "#F8FCFF",
  "orange-main": "#FE8B53",
  "teal-main": "#00e9ea",
  "black-main": "#0b305b",
  "black-secondary": "#164377",
};

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: customColors,
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      backgroundImage: {
        "hero-bg":
          "radial-gradient(59.82% 121.73% at -9.66% 130.31%,#00e9ea 0%,#1f80f0 52.08%,#005bc4 100%)",
        "hero-gradient-overlay":
          "linear-gradient(190deg,#1f80f0 15.05%,rgba(31,128,240,0) 30.39%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
