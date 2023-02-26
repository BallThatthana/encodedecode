/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.{html,js}','./src/**/*.{vue,js}'],
  theme: {
    container: {
      marginTop: {
        DEFAULT: '20px',
      },
    },
    extend: {},
  },
  plugins: [require("tailwindcss"), require("postcss"), require("autoprefixer")],
}
