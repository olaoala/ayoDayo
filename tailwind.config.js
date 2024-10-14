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
        'chocolate-light': '#7b3f00',
        'rose-dark-tint':'#4e272d',
        'rose-light-tint':'#ebd7da'
      },
      fontFamily:{
        'dance': ['Dance', 'sans-serif'],
        'pinyon':['pinyon', 'sans-serif'],
        'cardo':['cardo', 'sans-serif'],
        'nunito':['nunito', 'sans-serif']



      }
      
    },
    
  },
  plugins: [],
}


