module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#42b883'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
