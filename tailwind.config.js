const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: "#FFFFFF",
      pink: "#FF269E",
      black: "#010101",
      gray: "#EFFEFF",
      blue: "#46D9FF",
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        display: ['Nexa', ...defaultTheme.fontFamily.sans],
      },
    }
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [
    require('@tailwindcss/ui'),
  ],
  purge: {
    content: ['./resources/views/**/*.html']
  },
}
