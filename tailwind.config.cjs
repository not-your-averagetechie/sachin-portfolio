/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0C0C0C",
        secondary: "#8A99A5",
        tertiary: "#14171B",
        "black-100": "#101318",
        "black-200": "#0A0C0E",
        "white-100": "#f3f3f3",
        frost: "#D7E2EA",
        accent: "#B600A8",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #060709",
      },
      screens: {
        xs: "450px",
      },
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
