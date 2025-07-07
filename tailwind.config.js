// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        opensans: ['"Open Sans"', 'sans-serif'],
      },
    },
  },


  darkMode: 'class',
  plugins: [],
};
