/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        "bgpurple":"#ABAAF3",
        "primary":"rgb(50,36,96)",
        "secondary":"rgb(86, 54, 190)",
        "howis":"#fafbfe",
        "howtoh1":"#6D42EF",
        "howtopas":"#f9fbfe"
      },
      fontFamily:{
        brandon:['Inter', "sans-serif"]
      },
      container:{
        screens:{
          xs: "375px",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1140px",
          "2xl":"1140px",
    
        }
    }
 
      
  
      
   
  },

  plugins: []
}}
