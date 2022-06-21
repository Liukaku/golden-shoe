module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        tripleImg: "49rem",
        productImg: "34rem",
      },
      width: {
        feature: "98vw",
        productImg: "34rem",
        31: "31%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
