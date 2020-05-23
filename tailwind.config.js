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
        display: ['Nexa', ...defaultTheme.fontFamily.sans],
      },
    },
    customForms: theme => ({
      default: {
        'input, textarea, multiselect, select, checkbox, radio': {
          borderColor: theme('colors.pink'),
          backgroundColor: theme('colors.transparent')
        },
        'select, checkbox, radio': {
          iconColor: theme('colors.pink'),
        },
        'input, textarea, multiselect, select': {
          fontSize: theme('fontSize.sm'),
          borderRadius: theme('borderRadius.md'),
          padding: `${theme('spacing.3')} ${theme('spacing.5')}`,
          letterSpacing: theme('letterSpacing.wide'),
          color: theme('colors.white'),
          '&::placeholder': {
            color: theme('colors.pink'),
          },
          '&:focus': {
            boxShadow: defaultTheme.boxShadow.none,
            borderColor: theme('colors.pink'),
            '&::placeholder': {
              color: theme('colors.white')
            },
          }
        },
      },
    })
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
