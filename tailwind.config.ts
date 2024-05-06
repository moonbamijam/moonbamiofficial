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
      primary: "rgb(var(--primary) / <alpha-value>)",
      "primary-dark": "rgb(var(--primary-dark) / <alpha-value>)",
      "primary-light": "rgb(var(--primary-light) / <alpha-value>)",
      background: "rgb(var(--background) / <alpha-value>)",
      "dark-background": "#121212",
      surface: "rgb(var(--surface) / <alpha-value>)",
      "dm-surface": "#1F1F1F",
      "dm-surface-dark": "#151515",
      "dm-surface-light": "#2D2D2D",
      error: "rgb(var(--error) / <alpha-value>)",
      "on-primary": "rgb(var(--on-primary) / <alpha-value>)",
      "on-primary-dark": "rgb(var(--on-primary-dark) / <alpha-value>)",
      "on-secondary": "rgb(var(--on-secondary) / <alpha-value>)",
      "on-background": "rgb(var(--on--background) / <alpha-value>)",
      "on-surface": "rgb(var(--on-surface) / <alpha-value>)",
      "on-error": "rgb(var(--on-error) / <alpha-value>)",
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
      boxShadow: {
        gradient: "0px 0px 100px 100px rgba(3, 0, 28, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;
