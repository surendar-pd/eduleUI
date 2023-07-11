/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './layouts/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    extend: {
      colors:{
        primary:"#09090b"
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"]
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}