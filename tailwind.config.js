/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0a0e27',
          800: '#0f1329',
          700: '#1a1f3a',
          600: '#252d48',
        },
        accent: {
          neon: '#00ff88',
          gold: '#d4af37',
          cyan: '#00d9ff',
          purple: '#b100ff',
        },
        text: {
          primary: '#f5f5f5',
          secondary: '#a0a0a0',
          muted: '#707070',
        }
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        editorial: ['Playfair Display', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'typing': 'typing 3.5s steps(40, end)',
        'blink': 'blink .7s infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', textShadow: '0 0 10px rgba(0, 255, 136, 0.5)' },
          '50%': { opacity: '0.8', textShadow: '0 0 20px rgba(0, 255, 136, 0.8)' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blink: {
          '0%, 49%': { borderRightColor: 'transparent' },
          '50%, 100%': { borderRightColor: '#00ff88' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
