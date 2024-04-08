/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    fontFamily:{
      'primary':['Roboto','sans-serif']
    },
    extend: {
      colors:{
        'input-box':"rgba(1,1,1,0.05)",
        'btn-color':"rgba(255, 68, 0, 0.812)",
        'text-color':"rgb(21,0,157)",
      }
    },
  },
  plugins: [],
}

