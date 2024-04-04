/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        'rgba-white': 'rgba(255, 255, 255, 0.3)', // Red color with 50% opacity
        'rgba-blue': 'rgba(0, 0, 255, 0.3)', // Blue color with 30% opacity
      },
    },
  },
  plugins: [],
}

