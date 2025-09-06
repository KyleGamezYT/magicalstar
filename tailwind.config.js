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
        // Mystical theme colors
        'mystical-black': '#0a0a0a',
        'mystical-gray': '#1a1a1a',
        'mystical-dark': '#111111',
        'mystical-purple': '#8b5cf6',
        'mystical-blue': '#3b82f6',
        'mystical-cyan': '#06b6d4',
        'mystical-pink': '#ec4899',
        'glow-white': '#ffffff',
        'glow-blue': '#4a9eff',
        'glow-green': '#4ade80',
        'glow-purple': '#a855f7',
        'glow-cyan': '#22d3ee',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'sparkle': 'sparkle 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        glow: {
          '0%': { 
            filter: 'brightness(1) drop-shadow(0 0 5px rgba(255,255,255,0.3))',
            textShadow: '0 0 5px rgba(255,255,255,0.3)'
          },
          '100%': { 
            filter: 'brightness(1.2) drop-shadow(0 0 15px rgba(255,255,255,0.6))',
            textShadow: '0 0 15px rgba(255,255,255,0.6)'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        sparkle: {
          '0%, 100%': { opacity: 0.3, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.1)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backgroundImage: {
        'mystical-gradient': 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #000000 100%)',
        'glow-gradient': 'linear-gradient(45deg, #4a9eff, #4ade80, #a855f7)',
        'sparkle-gradient': 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'mystical': '0 0 20px rgba(139, 92, 246, 0.3)',
        'glow': '0 0 30px rgba(255, 255, 255, 0.2)',
        'inner-glow': 'inset 0 0 20px rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 