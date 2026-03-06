/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'header': ['Geologica', 'sans-serif'],
        'text': ['Onest', 'sans-serif'],
      },
      colors: {
        "brand": {
          DEFAULT: "#313181",
          "light": "#37A4B3",
          "dark": "#1f2458",
          "surface": "#FFF8EB"
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};