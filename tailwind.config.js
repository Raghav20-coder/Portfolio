/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  safelist: [
    'col-span-4',
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          surface: '#f7f7fb',
          card: '#ffffff',
          primary: '#9b87f5',
          secondary: '#7dd3fc',
          accent: '#fbcfe8',
          darkSurface: '#0b1220',
          darkCard: '#0f172a',
        },
      },
      boxShadow: {
        soft: '0 10px 25px -10px rgba(0,0,0,0.15)',
        glow: '0 0 0 3px rgba(155,135,245,0.25)'
      }
    },
  },
  plugins: [],
}
