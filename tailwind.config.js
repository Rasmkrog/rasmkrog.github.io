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
      backgroundImage: theme => ({
        'smooth-transition': 'linear-gradient(180deg, rgba(26, 15, 11, 0)'+
        '60%, rgba(26, 15, 11, 0.5) 70%, rgba(31, 65, 71, 0.8) 85%, #21545B 100%)',

        'teal-dark-gradient': 'linear-gradient(180deg, #21545B, #0B2A2D)',

        'dark-teal-gradient': 'linear-gradient(180deg, #0B2A2D, #21545B)',
        
        'radial-gradient': 'radial-gradient(circle, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.7) 40%, rgba(0, 0, 0, 0.1) 70%, rgba(0, 0, 0, 0) 100%)',
      }),
    },
  },
  plugins: [require('tailwind-scrollbar')],
}