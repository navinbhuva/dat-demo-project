/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
  important: true,
};
