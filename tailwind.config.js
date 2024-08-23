/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'Lightgray': '#638387',
      'DarkGray': '#222222',
      'DarkRed': '#721605',
      'BrightRed': '#AE1C0C',
      'Orange': '#DE7813',
      'Yello': '#FCD55B',
      
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      blue: colors.blue,
      amber: colors.amber,
      },
    extend: {},
  },
  plugins: [require('tailwind-scrollbar')],
}

