const colors = require('@tailwindcss/ui/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FCEDFA',
      black: '#15032a',
      gray: '#1d063a',
      hot: {
        default: '#FF269E',
        light: '#FF5ADC'
      },
      ultraviolet: {
        default: '#CE30FF',
        light: '#FB7EFF',
      },
      lightning: {
        default: '#1DCFED',
        light: '#66FAFE'
      },
      glowworm: {
        default: '#28F07E',
        light: '#6DFABE'
      },
      firefly: {
        default: '#FDF50C',
        light: '#FFFE7E'
      },
      flame: {
        default: '#FB024C',
        light: '#FF3D76'
      },
    },
    extend: {
      fontFamily: {
        display: ['Nexa', ...defaultTheme.fontFamily.sans],
      },
    },
    customForms: theme => ({
      default: {
        'input, textarea, multiselect, select, checkbox, radio': {
          borderColor: theme('colors.hot.default'),
          backgroundColor: theme('colors.transparent')
        },
        'select, checkbox, radio': {
          iconColor: theme('colors.hot.default'),
        },
        'input, textarea, multiselect, select': {
          fontSize: theme('fontSize.sm'),
          borderRadius: theme('borderRadius.md'),
          padding: `${theme('spacing.3')} ${theme('spacing.5')}`,
          letterSpacing: theme('letterSpacing.wide'),
          color: theme('colors.white'),
          '&::placeholder': {
            color: theme('colors.hot.default'),
          },
          '&:focus': {
            boxShadow: defaultTheme.boxShadow.none,
            borderColor: theme('colors.hot.default'),
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
