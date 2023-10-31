import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'rich-black': '#03001C',
        'deep-koamaru': '#301E67',
        'electric-pink': '#FB2576',
        'opaque-rb': 'rgba(3, 0, 28, 0.8)'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }

    },
  },
  plugins: [],
}
export default config
