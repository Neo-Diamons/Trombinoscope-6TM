const { light } = require('@mui/material/styles/createPalette')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#1f1f1f",
        background: "#0C1414",
        backgroundLight: "#1B1B1B",
        border: "#606060",
        backgroundShadow: "#3A3A3A"
      }
    }
  },
  plugins: [],
}

