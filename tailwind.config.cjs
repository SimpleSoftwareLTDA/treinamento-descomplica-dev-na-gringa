module.exports = {
  content: [
    "./*.html",
    "./en/**/*.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        void: '#08080a',
        obsidian: {
          DEFAULT: '#0e0e12',
          card: '#141418',
          raised: '#16161c',
          overlay: '#1f1f27',
          border: '#252530',
        },
        gold: {
          DEFAULT: '#dfb15b',
          light: '#f6e0a4',
          muted: '#967432',
          primary: '#dfb15b',
          glow: 'rgba(223, 177, 91, 0.18)',
        },
        brand: {
          dark: '#08080a',
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
          900: '#0e0e12',
          950: '#08080a',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
