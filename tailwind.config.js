/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        neon: '#5DFF02',
        'neon-dark': '#3FAF00',
        ink: {
          DEFAULT: '#000000',
          950: '#050505',
          900: '#0A0A0A',
          850: '#0D0D0D',
          800: '#111111',
          700: '#1A1A1A',
        },
        muted: '#A5A5A5',
      },
      fontFamily: {
        display: ['Archivo', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      boxShadow: {
        neon: '0 0 0 1px rgba(93,255,2,0.35), 0 0 28px -6px rgba(93,255,2,0.45)',
        'neon-lg': '0 0 0 1px rgba(93,255,2,0.5), 0 0 60px -10px rgba(93,255,2,0.6)',
      },
      transitionTimingFunction: {
        swift: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
  plugins: [],
}
