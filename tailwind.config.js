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
        'speaker-image' : "url('/public/assets/home/mobile/Bitmap.png')",
        'speaker-image-tablet' : "url('/public/assets/home/tablet/Bitmap.png')",
      },
      colors: {
        lightgray: '#d3d3d3',
      },
    },
    keyframes: {
      slideIn: {
        '0%': { opacity: 0, transform: 'translateY(-40px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
      },
      slideOut: {
        '0%': { opacity: 1, transform: 'translateY(0)' },
        '100%': { opacity: 0, transform: 'translateY(-40px)' },
      },
      slideRight: {
        '0%' : {opacity: 0, transform: 'transtlateX(-40px)'},
        '100%': { opacity: 1, transform: 'translateX(0)' },
      },
      slideLeft: {
        '0%' : {opacity: 1, transform: 'transtlateX(0)'},
        '100%': { opacity: 0, transform: 'translateX(-40px)' },
      }
    },
    animation: {
      slideIn: 'slideIn 0.3s ease-out',
      slideOut: 'slideOut 0.3s ease-out',
      slideRight: 'slideRight 0.3s ease-out',
      slideLeft: 'slideLeft 0.3s ease-out',
    },
  },
  plugins: [],
}