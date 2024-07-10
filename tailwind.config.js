/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./clicker-soldiers/*.{html,js}","./game-lobby/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        '3xl': '1903px',
      },
    },
  },
  plugins: [],
}

