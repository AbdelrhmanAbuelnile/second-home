/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primaryback": "#fafafa",
        "secondaryback": "#121212",
        "primary": "#1D1D1D",
        "secondary": "#0f7381",
        "third": "#40A2D8",
        "fourth": "#121212",
        "nav": "#2B2B2B",
        "ChartGray": "rgb(156 163 175)",
        "secondaryDarkLead": "#222C3C",
      },
      screens:{
        "largelaptop": "1400px",
      }
    },
  },
  plugins: [],
}

