const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderColor: {
        primary: '#3F3E57',
      },
      colors: {
        background: '#202020',
        button: '#F6BF42',
        field: '#222332',
      },
      fontFamily: {
        'grotesk-bold': 'Grotesk Bold',
        'grotesk-bold-italic': 'Grotesk Bold Italic',
        'grotesk-extra-bold': 'Grotesk Extra Bold',
        'grotesk-medium': 'Grotesk Medium',
        'grotesk-regular': 'Grotesk Regular',
        'grotesk-semi-bold': 'Grotesk Semi-Bold',
      },
      textColor: {
        title: '#F2F2F2',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
