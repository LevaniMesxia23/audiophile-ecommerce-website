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
        'home-header-desktop': "url('/public/assets/home/desktop/image-hero.jpg')",
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
        '0%' : {opacity: 0, transform: 'transtlateX(-100px)'},
        '100%': { opacity: 1, transform: 'translateX(0)' },
      },
      slideLeft: {
        '0%' : {opacity: 1, transform: 'transtlateX(0)'},
        '100%': { opacity: 0, transform: 'translateX(-100px)' },
      },
      titleSlideLeft: {
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(0)' },
      },
      titleSlideRight: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(100%)' },
      },
      titleSlideMobile: {
        '0%': { transform: 'translateY(100%)' },
        '100%': { transform: 'translateY(0)' },
      },
    },
    animation: {
      slideIn: 'slideIn 0.3s ease-out',
      slideOut: 'slideOut 0.3s ease-out',
      slideRight: 'slideRight 1.5s ease-out',
      slideLeft: 'slideLeft 1.5s ease-out',
      titleSlideRight: 'titleSlideRight 0.5s ease-out',
      titleSlideLeft: 'titleSlideLeft 0.5s ease-out',
    },
  },
  plugins: [],
}