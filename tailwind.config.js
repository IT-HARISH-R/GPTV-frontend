/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: "#003f7f", 
        // secondary: "#001932",  
        primary: "#1D4ED8", 
        secondary: "#EF4444",  
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],  
      },
    },
  },
  plugins: [],
}