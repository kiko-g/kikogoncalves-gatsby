const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#173b6c',
          800: '#2e4f7b',
          700: '#456289',
          600: '#5d7698',
          500: '#7489a7',
          400: '#8b9db6',
          300: '#a2b1c4',
          200: '#b9c4d3',
          100: '#d1d8e2',
          50: '#dce2e9',
        },
        secondary: {
          900: '#149ddd',
          800: '#20a2df',
          700: '#2ca7e0',
          600: '#37ace2',
          500: '#43b1e4',
          400: '#4fb6e6',
          300: '#5abae7',
          200: '#66bfe9',
          100: '#72c4eb',
          50: '#7ec9ec',
        },
        tertiary: {
          900: '#9f7aea',
          800: '#a481eb',
          700: '#a987ec',
          600: '#ad8eed',
          500: '#b295ee',
          400: '#b79bef',
          300: '#bca2f0',
          200: '#c1a9f1',
          100: '#c5aff2',
          50: '#cab6f3',
        },
        dark: '#252832',
        darker: '#1e2028',
        darkest: '#1a1c23',
        light: '#f2f4f7',
        lighter: '#f7f7f7',
        lightest: '#fcfcfc',
        navydark: '#1a202c',
      },
      maxWidth: {
        screen: '100vw',
      },
      fontSize: {
        xxs: '0.6rem',
      },
      fontFamily: {
        prose: ['Inter', ...defaultTheme.fontFamily.sans],
        headings: ['Inter', ...defaultTheme.fontFamily.sans],
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        code: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
        mono: ['Fira Code', ...defaultTheme.fontFamily.mono],
        source: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
        'ubuntu-mono': ['Ubuntu Mono', ...defaultTheme.fontFamily.mono],
        system: defaultTheme.fontFamily.sans,
        flow: 'Flow',
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
