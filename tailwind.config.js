/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width : {
        1300: "1300px"
      },
      colors: {
        gris: "#292929",
        gris2: "#3f3f3f",
        gris3 : "#4f4f4f"
      }
    },
  },
  plugins: [],
}