/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "main-color": "#f5d97e",  
        "Sub-main": "#E5BA73",
        "bg": "#141414",
        "boder": ".1rem solid rgba(225,225,225,.3)",
      }
    },
    fontFamily: {
      Poppins: ["Poppind, sans-serif"]
    },
    container: {

      padding: "1rem",
      screens: {
        "phone":"500px",
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px"
      }
    }
  },
  plugins: [],
}