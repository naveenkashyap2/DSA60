/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#16A866',
          dark: '#0E8A51',
          deep: '#0B6B40',
          light: '#E8F7ED'
        },
        ink: '#080808',
        night: {
          DEFAULT: '#080808',
          card: '#111111',
          soft: '#161616',
          line: '#242424'
        },
        line: '#EAEAEA',
        blush: {
          DEFAULT: '#F48FB1',
          light: '#FCEEF3'
        },
        info: {
          DEFAULT: '#5B8CFF',
          light: '#EEF3FF'
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif'
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Consolas',
          'Liberation Mono',
          'monospace'
        ]
      },
      boxShadow: {
        card: '0 1px 2px rgba(8,8,8,0.04), 0 4px 16px rgba(8,8,8,0.05)',
        pop: '0 8px 30px rgba(8,8,8,0.12)'
      },
      opacity: Object.fromEntries(
        Array.from({ length: 101 }, (_, i) => [i, i / 100])
      ),
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' }
        }
      },
      animation: {
        shimmer: 'shimmer 1.4s infinite'
      }
    }
  },
  plugins: []
};
