/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-header-mobile': "url('/public/assets/home/mobile/image-header.jpg')",
        'speaker-image' :   "url('/public/assets/home/mobile/Bitmap.png')",
        'speaker-image-tablet' : "url('/public/assets/home/tablet/Bitmap.png')",
      },
      colors: {
        lightgray: '#d3d3d3',
      },
    },
  },
  plugins: [],
}