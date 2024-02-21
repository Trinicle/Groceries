/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["Josefin", "sans-serif"] 
      },
      textColor: {
        'dull-white': '#FFFFFFB3'
      },
      backgroundColor: {
        'white-light': '#FFFFFF30',
        'white-medium': '#FFFFFF40'
      },
      width: {
        '600': "600px"
      }
    },
  },
  plugins: [],
}

