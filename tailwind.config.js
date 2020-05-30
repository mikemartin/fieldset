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
      pop: {
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
          borderColor: theme('colors.transparent'),
          backgroundColor: theme('colors.gray')
        },
        'input, textarea, multiselect, select': {
          fontSize: theme('fontSize.sm'),
          borderRadius: theme('borderRadius.md'),
          padding: `${theme('spacing.3')} ${theme('spacing.5')}`,
          letterSpacing: theme('letterSpacing.wide'),
          color: theme('colors.pop.light'),
          '&::placeholder': {
            color: theme('colors.pop.default'),
          },
          '&:focus': {
            boxShadow: defaultTheme.boxShadow.none,
            borderColor: theme('colors.transparent'),
            '&::placeholder': {
              color: theme('colors.pop.light')
            },
          }
        },
      },
      pop: {
        'input, textarea, multiselect, select': {
          color: theme('colors.pop.light'),
          '&::placeholder': {
            color: theme('colors.pop.default'),
          }
        },
      },
      ultraviolet: {
        'input, textarea, multiselect, select': {
          color: theme('colors.ultraviolet.light'),
          '&::placeholder': {
            color: theme('colors.ultraviolet.default'),
          },
        },
      },
      lightning: {
        'input, textarea, multiselect, select': {
          color: theme('colors.lightning.light'),
          '&::placeholder': {
            color: theme('colors.lightning.default'),
          },
        },
      },
      glowworm: {
        'input, textarea, multiselect, select': {
          color: theme('colors.glowworm.light'),
          '&::placeholder': {
            color: theme('colors.glowworm.default'),
          },
        },
      },
      firefly: {
        'input, textarea, multiselect, select': {
          color: theme('colors.firefly.light'),
          '&::placeholder': {
            color: theme('colors.firefly.default'),
          },
        },
      },
      flame: {
        'input, textarea, multiselect, select': {
          color: theme('colors.flame.light'),
          '&::placeholder': {
            color: theme('colors.flame.default'),
          },
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
