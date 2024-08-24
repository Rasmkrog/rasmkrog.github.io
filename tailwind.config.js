/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./*.{html,css,js}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'Darkblack': '#1A0F0B',
        'actionamber': '#E27D01',
        'myteal' : {
          500 : '#20AAAD',
          600 : '#15787E',
          700 : '#21545B',
          800 : '#0B2A2D',
        },
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        blue: colors.blue,
        amber: colors.amber,
        teal: colors.teal,
        
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}