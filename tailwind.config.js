/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 16 row grid
        'cardLayout': ' repeat(auto-fill,  minmax(min(100%, 250px), 1fr))',

      },
      fontFamily:{
        Mulish: ['Mulish', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}