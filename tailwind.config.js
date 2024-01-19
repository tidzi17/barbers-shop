
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        screens: {
        md1200: { max: "1200px" },
        md1000: { max: "1000px" },
        min800: { max: "800px" },
        max800: { min: "801px" },
        min620: { max: "620px" },
        min540: { max: "540px" },
        min450: { max: "450px" },
        min375: { max: "375px" },
        },
        colors:{
          primaryOrange: '#CB8214',
          secondaryBlack: '#101010',
          black: '#000000 ',
          brown: '#24190A',
          beige: '#8F7F6B',
          textGrey: "#494A49",
          white: "#FFF",
          
        },
        fontFamily:{
          karantina: ['Karantina'],
          allison: ['Allison'],
          antonio: ['Antonio'],
          alumni: ['Alumni Sans'],
          athiti: ['Athiti'],
          inika: ['Inika'],
          arizonia: ['Arizonia'],
          rivage: ['Beau Rivage'],
         
        },
        height: {
          '10vh': '10vh',
          '100vh': '100vh',
          '130vh': '130vh',
          '550px': '550px'
          
        },
      },
    },
    plugins: [],
  }
  