const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ice: '#E8EBF5', // dce4f0
        navy: '#18222e',
        dark: '#252832',
        darker: '#1E2028',
        darkest: '#1A1C23',
        light: '#F2F4F7',
        lighter: '#F7F7F7',
        lightest: '#FFFFFF',
        codepink: '#EB72A1',
        slate: {
          150: '#eaeef4',
        },
        primary: {
          DEFAULT: '#33adad',
          50: '#e6f5f5',
          100: '#ccebeb',
          200: '#b2e0e0',
          300: '#99d6d6',
          400: '#80cccc',
          500: '#66c2c2',
          600: '#4cb8b8',
          700: '#33adad',
          800: '#1aa3a3',
          900: '#009999',
        },
        secondary: {
          DEFAULT: '#3385d6',
          50: '#d9e8f7',
          100: '#bfd9f2',
          200: '#b2d1f0',
          300: '#99c2eb',
          400: '#80b2e6',
          500: '#66a3e0',
          600: '#4d94db',
          700: '#3385d6',
          800: '#1975d1',
          900: '#0066cc',
        },
      },

      maxWidth: {
        screen: '100vw',
        '8xl': '88rem',
        '9xl': '96rem',
      },
      fontSize: {
        xxs: '0.6rem',
      },
      boxShadow: {
        'inner-md': 'inset 0px 0px 2px 2px rgb(0 0 0 / 0.1)',
        'inner-xl': 'inset 0px 0px 4px 4px rgb(0 0 0 / 0.1)',
      },
      fontFamily: {
        sans: [
          'Inter var, sans-serif',
          {
            fontFeatureSettings: '"cv11", "ss01"',
            fontVariationSettings: '"opsz" 32',
          },
        ],
        headings: [
          'Inter var, sans-serif',
          {
            fontFeatureSettings: '"cv11", "ss01"',
            fontVariationSettings: '"opsz" 32',
          },
        ],
        code: ['Fira Code', ...defaultTheme.fontFamily.mono],
      },
      keyframes: {
        dark: {
          '0%, 100%': { transform: 'rotate(5deg)' },
          '50%': { transform: 'rotate(-5deg)' },
        },
        light: {
          '0%, 100%': { transform: 'rotate(5deg)' },
          '50%': { transform: 'rotate(-5deg)' },
        },
      },
      animation: {
        dark: 'dark 400ms ease-in-out',
        light: 'light 400ms ease-in-out',
      },
    },
  },
  plugins: ['gatsby-plugin-postcss'],
}
