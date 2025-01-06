/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // blue: '#9538E2',     
        // blue: '#febd18',  
        bgcolor:'#161b1d' ,
        blue: '#7eb80e',  
           
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
