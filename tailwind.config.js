/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        userDarkPurple:'#1F0B44',
        userMediumPurple:'#3D256A',
        userLightPurple:'#A64AEE',
        userOrange:'#F69A36'
      }
    },
  },
  plugins: [],
}