/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FAFAFA',
        secondary: '#002C53',
        headers: '#0064BB'
      },
      fontFamily: {
        'title': ['Nova SSi Bold', 'sans'], // 'Aller_Bd' es el nombre de la fuente y 'sans' es la fallback
      },
    },
  },
  plugins: [],
}

