<<<<<<< HEAD
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'mystical-black': '#0a0a0a',
        'mystical-gray': '#1a1a1a',
        'glow-white': '#ffffff',
        'glow-blue': '#4a9eff',
        'glow-green': '#4ade80',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'sparkle': 'sparkle 3s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { filter: 'brightness(1) drop-shadow(0 0 5px rgba(255,255,255,0.3))' },
          '100%': { filter: 'brightness(1.2) drop-shadow(0 0 15px rgba(255,255,255,0.6))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        sparkle: {
          '0%, 100%': { opacity: 0.3 },
          '50%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
=======
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'mystical-black': '#0a0a0a',
        'mystical-gray': '#1a1a1a',
        'glow-white': '#ffffff',
        'glow-blue': '#4a9eff',
        'glow-green': '#4ade80',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'sparkle': 'sparkle 3s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { filter: 'brightness(1) drop-shadow(0 0 5px rgba(255,255,255,0.3))' },
          '100%': { filter: 'brightness(1.2) drop-shadow(0 0 15px rgba(255,255,255,0.6))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        sparkle: {
          '0%, 100%': { opacity: 0.3 },
          '50%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
>>>>>>> 71b3cc6c0b1b3674c234eb3b766b4f31efa5b2e3
} 