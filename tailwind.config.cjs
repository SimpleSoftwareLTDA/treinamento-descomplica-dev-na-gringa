module.exports = {
  content: [
    "./*.html",
    "./en/**/*.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          0: '#000000',
          1: '#0A0A0C',
          2: '#121214',
          3: '#1C1C20',
          4: '#242428',
        },
        void: '#000000',
        obsidian: {
          DEFAULT: '#0A0A0C',
          card: '#121214',
          raised: '#1C1C20',
          overlay: '#242428',
          border: 'rgba(223, 177, 91, 0.22)',
        },
        gold: {
          DEFAULT: '#dfb15b',
          primary: '#dfb15b',
          light: '#f6e0a4',
          muted: '#967432',
          border: 'rgba(223, 177, 91, 0.35)',
          glow: 'rgba(223, 177, 91, 0.14)',
          'on-fill': '#0A0A0C',
        },
        jtext: {
          primary: '#F5F5F7',
          body: '#E1E1E6',
          secondary: '#A4A4AE',
          tertiary: '#90909A',
          disabled: '#4A4A52',
          gold: '#E8CA7C',
        },
        status: {
          error: '#FF5C5C',
          'error-bg': 'rgba(255, 92, 92, 0.12)',
          warning: '#E8A23D',
          'warning-bg': 'rgba(232, 162, 61, 0.12)',
          success: '#4FAE7E',
          'success-bg': 'rgba(79, 174, 126, 0.12)',
          info: '#5B9BF3',
          'info-bg': 'rgba(91, 155, 243, 0.12)',
        },
        brand: {
          dark: '#000000',
          blue: '#dfb15b',
          cyan: '#f6e0a4',
          indigo: '#c99839',
        },
        cyan: {
          400: '#f6e0a4',
          500: '#dfb15b',
          600: '#c99839',
        },
        blue: {
          500: '#dfb15b',
          600: '#c99839',
        },
        slate: {
          900: '#0A0A0C',
          950: '#000000',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'system-ui', 'sans-serif'],
        display: ['Ubuntu', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
        oriental: ['Shippori Mincho', 'serif'],
      }
    },
  },
  plugins: [],
}
