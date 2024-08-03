/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {       
      },
      fontFamily: {
        logo: ['Montserrat'],
        content: ['Inter']
      },
    },
  },
  plugins: [],
}

