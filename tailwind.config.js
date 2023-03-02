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
        primary: '#124C8E',
        secondary: '#149DDD',
        tertiary: '#14B8A6',
        codepink: '#EB72A1',
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
        prose: ['Inter', ...defaultTheme.fontFamily.sans],
        headings: ['Inter', ...defaultTheme.fontFamily.sans],
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        code: ['Fira Code', ...defaultTheme.fontFamily.mono],
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
