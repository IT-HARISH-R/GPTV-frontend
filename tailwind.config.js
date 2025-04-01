/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        // primary: "#1D4ED8", 
        // secondary: "#e6a400",  

        primary: "#e6a400", 
        secondary: "#1D4ED8",  
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],  
      },
    },
  },
  plugins: [],
}