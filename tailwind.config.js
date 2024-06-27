/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'light-gray': '#f1f1f1',
      }
    },
    container: {
      center: true
    }
  },
  plugins: [],
}