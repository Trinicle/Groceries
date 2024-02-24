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
        'dull-white': '#FFFFFFB3',
        'forest': '#014421'
      },
      backgroundColor: {
        'white-light': '#FFFFFF30',
        'white-medium': '#FFFFFF40',
        'forest': "#014421",
        'warm-gray': '#f4f2ee'
      },
      width: {
        '600': "600px",
        '1200': '1200px',
        '1000': '1000px'
      },
      ringColor: {
        'forest': "#014421"
      }

    },
  },
  plugins: [],
}

