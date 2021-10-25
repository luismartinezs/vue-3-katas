module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#42b883",
          100: "#d9f1e6",
          200: "#b3e3cd",
          300: "#8ed4b5",
          400: "#68c69c",
          500: "#42b883",
          600: "#359369",
          700: "#286e4f",
          800: "#1a4a34",
          900: "#0d251a",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
