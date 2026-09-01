/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e3a8a',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#f97316',
          foreground: '#ffffff',
        }
      }
    },
  },
  plugins: [],
}
