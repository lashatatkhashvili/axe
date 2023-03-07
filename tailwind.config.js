/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./src/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      xsm: { max: "500px" },
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
