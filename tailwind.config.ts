import type { Config } from 'tailwindcss'

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", 
    "./public/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2E43CD',
        secondary: '#F4DD2A',
        light: '#F5F5F5',
        dark: '#000000', /* Atur var(--dark) jika digunakan */
      },
      fontWeight: {
        medium: '600',
        semibold: '700',
      },
    },
  },
  plugins: [],
} satisfies Config
