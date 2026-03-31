/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        error: 'var(--color-error)',
        neutral900: 'var(--color-neutral-900)',
        neutral800: 'var(--color-neutral-800)',
        neutral700: 'var(--color-neutral-700)',
        neutral500: 'var(--color-neutral-500)',
        neutral100: 'var(--color-neutral-100)',
        white: 'var(--color-white)'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}
