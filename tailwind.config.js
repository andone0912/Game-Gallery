/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/clicker-soldiers/*.{html,js}",
    "./public/game-lobby/*.{html,js}"

  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1903px',
      },
    },
  },
  plugins: [],
}

