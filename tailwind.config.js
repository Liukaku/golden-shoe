module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        tripleImg: "39rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
