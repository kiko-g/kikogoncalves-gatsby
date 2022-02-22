const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#1a202c',
        light: '#f8fafc',
        skyish: '#BAE6FD',
        tealish: '#60ebbf',
        crimson: '#ff0046',
      },
      fontSize: {
        xxs: '0.6rem',
      },
      fontFamily: {
        sans: ['Inter, sans-serif', ...defaultTheme.fontFamily.sans],
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
