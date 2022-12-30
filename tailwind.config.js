/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js, jsx}", "./public/index.html"],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      colors: {
            main: "#333950",  /* Main Primary color */
            accent1: "#8086A0", 
            accent2:  "#4B526E", 
            accent3: "#202743", 
            accent4: "#121834",
            reddy: "#FF5572",
            lorange: "#F09235",
            purp: "#976192",
            purp2: "#692657"
      },
      lineHeight: {
        '12': '3rem',
      },
      width: {
        'extra-wide': '400%',
        'xx-wide': '300%'
      },

      height: {
        'extra-wide': '300%'
      },

      fontFamily: {
        'sans': ['Calibre-Semibold', 'Calibre-Regular', 'Helvetica', 'Arial', 'sans-serif']
      }    
    },
  },
  plugins: [],
}
