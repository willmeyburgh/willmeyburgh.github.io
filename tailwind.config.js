/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./.vitepress/**/*.{vue,js,ts,jsx,tsx}",
    "./docs/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
