/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./contact.html",
    "./privacypolicy.html", 
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        green: '#01662D',
        whitesmoke: '#EEECEA',
        black: '#010001',
        yellow: '#FFE901',
      },
    fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}