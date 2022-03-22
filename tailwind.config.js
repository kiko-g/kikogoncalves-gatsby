const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#1a202c',
        dark1: '#1a1c23',
        dark2: '#1e2028',
        dark3: '#242731',
        light: '#f8fafc',
        light1: '#fafbfd',
        light2: '#f2f4f7',
        light3: '#ffffff',
        lilac: '#9f7aea',
        skyish: '#bae6fd',
        tealish: '#60ebbf',
        crimson: '#ff0046',
      },
      maxWidth: {
        screen: '100vw',
      },
      fontSize: {
        xxs: '0.6rem',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        code: ['Fira Code', ...defaultTheme.fontFamily.mono],
        mono: ['Fira Code', ...defaultTheme.fontFamily.mono],
        source: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
        'ubuntu-mono': ['Ubuntu Mono', ...defaultTheme.fontFamily.mono],
        system: defaultTheme.fontFamily.sans,
        flow: 'Flow',
      },
      backgroundImage: { hero: "url('/src/components/img/hero.jpg')" },
    },
  },
  plugins: [],
}
