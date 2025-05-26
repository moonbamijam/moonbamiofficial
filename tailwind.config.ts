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
      primary: "#007ACC",
      "primary-variant": "#065aaa",
      "primary-dark": "#065aaa",
      "primary-light": "#009ff5",
      secondary: "#55defe",
      "secondary-variant": "#19bfe2",
      "secondary-dark": "#cc5200",
      "secondary-light": "#e28707",
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
        rgb: "moonbami 15s linear infinite",
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
