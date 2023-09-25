/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        subrayada:"'Montserrat Subrayada', sans-serif",
        rammetto:"'Rammetto One', cursive",
        roboto:"'Roboto', sans-serif",
        rubik:"'Rubik', sans-serif",
        kanit:"'Kanit', sans-serif"
      }
    },
  },
  plugins: [],
}
