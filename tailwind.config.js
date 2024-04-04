/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ["Poppins", "sans-serif"]
      },
      colors: {
        'primary': '#022169',
        'secondary': '#f5f7fa',
        'textsecondary': '#0e73b2',
        'texttertiary': '#308263',
        'textmains': '#2b2d2f',
        'textsub': '#525456'
      }
    },
  },
  plugins: [],
}

