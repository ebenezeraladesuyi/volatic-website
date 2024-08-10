/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        mont : ['Montserrat', 'sans-serif'],
        pop : ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'hero-bg' : "url('/src/assets/images/hero-volatic.png')",
        'mobile-bg' : "url('/src/assets/images/vol-mobile-bg.avif')",
        'bg2' : "url('/src/assets/images/bg2.jpg')",
        'forex-bg' : "url('/src/assets/forex/forex.jpg')",
      }
    },
  },
  plugins: [],
}