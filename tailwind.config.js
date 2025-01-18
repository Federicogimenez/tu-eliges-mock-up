/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'lightblue-primary':'#2995FC',
      'blue-primary':'#6166fd',
      'pink-primary':'#DA82FF',
    },
    animation:{
      'pulse-infinite':'pulseInfinite 1s ease-in-out infinite alternate '
    },
    extend: {
      fontFamily: {
				montserrat: ['"Monserrat"', 'sans-serif'],
				montserrat_italic: ['"Monserrat Italic"', 'sans-serif'],
			},
    },
  },
  plugins: [],
}

