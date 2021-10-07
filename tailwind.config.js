const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './resources/**/*.antlers.html',
      './resources/**/*.blade.php',
      './resources/**/*.vue',
      './content/**/*.md'
    ]
  },
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FCEDFA',
      black: '#251E2D',
      gray: '#342B3E',
      light: '#4A3E57',
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
          color: theme('colors.white'),
          '&::placeholder': {
            color: theme('colors.pop.default'),
          },
          '&:focus': {
            boxShadow: defaultTheme.boxShadow.none,
            borderColor: theme('colors.transparent'),
            '&::placeholder': {
              color: theme('colors.white')
            },
          }
        },
      },
      pop: {
        'input, textarea, multiselect, select': {
          '&::placeholder': {
            color: theme('colors.pop.default'),
          },
        },
      },
      ultraviolet: {
        'input, textarea, multiselect, select': {
          '&::placeholder': {
            color: theme('colors.ultraviolet.default'),
          },
        },
      },
      lightning: {
        'input, textarea, multiselect, select': {
          '&::placeholder': {
            color: theme('colors.lightning.default'),
          },
        },
      },
      glowworm: {
        'input, textarea, multiselect, select': {
          '&::placeholder': {
            color: theme('colors.glowworm.default'),
          },
        },
      },
      firefly: {
        'input, textarea, multiselect, select': {
          '&::placeholder': {
            color: theme('colors.firefly.default'),
          },
        },
      },
      flame: {
        'input, textarea, multiselect, select': {
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
