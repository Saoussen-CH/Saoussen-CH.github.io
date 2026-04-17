/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0E0E12',
        'ink-2': '#2C2C35',
        'ink-3': '#5A5F6B',
        'ink-4': '#9096A0',
        line: '#E5E7EB',
        'line-soft': '#EEF0F3',
        paper: '#FFFFFF',
        mist: '#F7FBFF',
        'mist-2': '#FBFDFF',
        lavender: '#E6D6F2',
        'lavender-2': '#D7C2EA',
        rose: '#FAD9D2',
        'rose-2': '#F7C7BD',
        coral: '#1D4ED8',
        'coral-2': '#3B82F6',
        violet: '#6B3FBA',
        'violet-2': '#8E5CD8',
        sky: '#0EA5E9',
        'sky-2': '#38BDF8',
        night: '#0D0520',
        'night-2': '#1A0B30',
      },
      fontFamily: {
        sans: ['Satoshi', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Satoshi', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-1': ['clamp(3rem, 7.5vw, 6.5rem)', { lineHeight: '1.02', letterSpacing: '-0.035em' }],
        'display-2': ['clamp(2.25rem, 4.75vw, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-3': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.12', letterSpacing: '-0.025em' }],
      },
      letterSpacing: {
        wider2: '0.14em',
        wider3: '0.2em',
      },
      borderRadius: {
        '2.5xl': '1.25rem',
        '4xl': '2rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(14,14,18,0.04), 0 8px 24px rgba(14,14,18,0.05)',
        'card-hover': '0 2px 4px rgba(14,14,18,0.06), 0 16px 40px rgba(14,14,18,0.08)',
        mock: '0 30px 80px rgba(107,63,186,0.12), 0 10px 24px rgba(59,130,246,0.06)',
      },
      animation: {
        'float-slow': 'float 14s ease-in-out infinite',
        'float-slower': 'float 22s ease-in-out -6s infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'bar-grow': 'barGrow 1.2s cubic-bezier(0.2,0.7,0.2,1) both',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(0,-18px,0) scale(1.03)' },
        },
        pulseSoft: {
          '0%,100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
        barGrow: {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
    },
  },
  plugins: [],
}
