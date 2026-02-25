/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: '#2ECC71',
          dark: '#1A7A42',
          light: '#D4F5E2',
          glow: 'rgba(46,204,113,0.15)',
        },
        amber: {
          DEFAULT: '#F39C12',
          light: '#FEF3DC',
          glow: 'rgba(243,156,18,0.15)',
        },
        dark: {
          DEFAULT: '#0D1117',
          card: '#161B22',
          card2: '#1C2128',
          border: '#21262D',
        },
        text: {
          primary: '#E6EDF3',
          secondary: '#8B949E',
          muted: '#484F58',
        },
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'DM Sans', 'sans-serif'],
        display: ['var(--font-syne)', 'Syne', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
