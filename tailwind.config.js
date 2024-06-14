/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-header-mobile': "url('/public/assets/home/mobile/image-header.jpg')"
      },
      colors: {
        lightgray: '#d3d3d3',
      },
    },
  },
  plugins: [],
}