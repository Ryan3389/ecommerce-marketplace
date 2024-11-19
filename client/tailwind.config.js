/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navBackground: '#99CCCC',
        btnBackground: '#007F99',
        btnHover: '#005F73',
        btnText: '#FFFFFF'
      }
    },
  },
  plugins: [],
}

