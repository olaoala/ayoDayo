/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'rose-gold': '#b76e79',
        'chocolate': '#7b3f00',
        'chocolate-light': '#7b3f00'
      },
      fontFamily:{
        'dance': ['Dance', 'sans-serif'],
      }
      
    },
    
  },
  plugins: [],
}


