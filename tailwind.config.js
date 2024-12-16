/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E4EDFA',
          dark: '#28244D', // Warna abu-abu gelap
        },
        dark: '#27244E', 
        secondary: '#CEEF4E',
        accent: '#DBCAFF',
        gray: '#E7E7E7',
      },
      fontFamily: {
        'noto-sans': ['Noto Sans', 'serif']
      }
    },
  },
  plugins: [],
}

