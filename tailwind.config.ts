import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./frontend/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      slate: colors.slate,
      gray: colors.gray,
      transparent: colors.transparent,
      primary: "#56bbf1",
      primaryvariant: "#47a1df",
      secondary: "#f18c56",
      secondaryvariant: "#eb6000",
      background: "#FAFAFA",
      "dark-background": "#121212",
      surface: "#FDFCFA",
      "dm-surface": "#1F1F1F",
      "dm-surface-dark": "#151515",
      "dm-surface-light": "#2D2D2D",
      error: "#EA3C53",
      "on-primary": colors.white,
      "on-primary-dark": colors.white,
      "on-background": colors.black,
      "on-surface": colors.black,
      "on-error": colors.white,
      github: "#2dba4e",
      "github-variant": "#23ab44",
    },
    extend: {
      container: {
        center: true,
      },
      screens: {
        xs: "475px",
        premium: "1920px",
      },
      animation: {
        "rgb-text": "rgb-text 10s ease infinite",
        "rgb-text-dark": "rgb-text-dark 10s ease infinite",
        "rgb-bg": "rgb-bg 8s ease infinite",
        "rgb-bg-dark": "rgb-bg-dark 8s ease infinite",
        blob: "reshapeblob 8s ease-in-out infinite, rotateblob 5s ease-in-out infinite, moveblob 180s linear infinite",
      },
      boxShadow: {
        gradient: "0px 0px 100px 100px rgba(3, 0, 28, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;
