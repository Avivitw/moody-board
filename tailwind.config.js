module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // fontFamily: {
    //   sans: ["Inter", "sans-serif"],
    //   serif: ["Merriweather", "serif"],
    // },
    extend: {
      colors: {
        primary: "#096B72",
        secondaryA: "#FEEED4",
        secondaryB: "#094550",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
