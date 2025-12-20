/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#0a0a0f',
          secondary: '#12121a',
          tertiary: '#1a1a25',
        },
        accent: {
          cyan: '#00d4ff',
          magenta: '#ff006e',
          violet: '#8338ec',
          gold: '#ffbe0b',
          green: '#00f5a0',
        },
        text: {
          primary: '#f0f0f5',
          secondary: '#a0a0b0',
          muted: '#606070',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      animation: {
        'float': 'float 20s ease-in-out infinite',
        'float-reverse': 'float 25s ease-in-out infinite reverse',
        'pulse-slow': 'pulse 2s ease-in-out infinite',
        'rotate-slow': 'rotate 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(50px, 50px)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(135deg, #00d4ff, #8338ec, #ff006e)',
        'gradient-gold': 'linear-gradient(135deg, #ffbe0b, #ff9500)',
        'gradient-green': 'linear-gradient(135deg, #00f5a0, #00d4ff)',
      }
    },
  },
  plugins: [],
}
