/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors:{
        brand:{
          50:  '#f1fafa',
          100: '#dcf0f1',
          200: '#bde3e4',
          300: '#90ccd0',
          400: '#70b9be',
          500: '#40939a', /* main brand color */
          600: '#387982',
          700: '#33636b',
          800: '#30535a',
          900: '#2c464d',
          950: '#192e33',
        },
      },
    },
  },
  plugins: [],
}

