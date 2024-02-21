import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'opaque-rb': 'rgba(3, 0, 28, 0.8)',
        primary: 'rgb(var(--primary))',
        secondary: 'rgb(var(--secondary))',
        azure: 'rgb(var(--azure))',
      },
      container: {
        center: true,
      },
      screens: {
        'xs': '475px',
        'premium': '1920px',
      },
      boxShadow: {
        'gradient': '0px 0px 100px 100px rgba(3, 0, 28, 0.3)',
      },
    },
  },
  plugins: [],
}
export default config
