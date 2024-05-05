/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./accuntingstyle/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ltGreen: "#606C38",
        drGreen: "#283618",
        vanilla: "#FEFAE0",
        ltOrange: "#DDA15E",
        drOrange: "#BC6C25",
      },
    },
  },
  plugins: [],
};
