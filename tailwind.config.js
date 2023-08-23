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
          DEFAULT: '#3c8edf',
          50: '#eef5fc',
          100: '#dcebf9',
          200: '#b9d1f7',
          300: '#95b6f5',
          400: '#719cf3',
          500: '#3c8edf',
          600: '#0770cb',
          700: '#005bb7',
          800: '#004593',
          900: '#00306f',
        },
        secondary: {
          DEFAULT: '#cf8fff',
          50: '#faf4fe',
          100: '#f2e0fd',
          200: '#e4bdfb',
          300: '#d69af9',
          400: '#c877f7',
          500: '#a672f2',
          600: '#8a5ee0',
          700: '#6e4acd',
          800: '#5236ba',
          900: '#3622a7',
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
