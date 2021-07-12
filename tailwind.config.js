module.exports = {
  
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      
      colors:{
        "feel":"#4B4453",
        "tmax":"#4E8397",
        "hu":"#926C00",
        "redcoll":"#D00C0C",
        "primar":"#cf1578",
      },
       backgroundImage:{
         'hero-pattern': "url('./weather.jpg')",
        },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
