import type { Config } from "tailwindcss";
import colors, { transparent } from "tailwindcss/colors";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      transparent: colors.transparent,
      primary: "#007ACC",
      "primary-dark": "#065AAA",
      "primary-light": "#009FF5",
      secondary: "#CC5200",
      "secondary-light": "#DD7804",
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
      // foreign colors - colors that are not part of the project
      "color-github": "#2dba4e",
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
      },
      boxShadow: {
        gradient: "0px 0px 100px 100px rgba(3, 0, 28, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;
