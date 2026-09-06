import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './data/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#8B1A1A',
          'red-dark': '#5C1010',
          'red-light': '#C0392B',
          accent: '#E74C3C',
          gold: '#D4AF37'
        }
      },
      boxShadow: {
        brand: '0 2px 12px rgba(139,26,26,0.08)'
      },
      fontFamily: {
        cairo: ['Tahoma', 'Arial', 'sans-serif'],
        inter: ['Inter', 'Segoe UI', 'Arial', 'sans-serif'],
        display: ['Georgia', 'serif']
      }
    }
  },
  plugins: []
};

export default config;
