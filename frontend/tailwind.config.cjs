/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Open_Sans: ['"Open Sans"']
    },
    extend: {
      colors: {
        'black': '#242424',
        'black-force': '#1B1B1B'
      }
    },
  },
  plugins: [],
}
