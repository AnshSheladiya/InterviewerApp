/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'HelveticaNeue': ['HelveticaNeue', 'Helvetica', 'Arial', 'sans'],
        'wildworld': ['WILD WORLD', 'sans-serif'],
        'outfit': ['Outfit', 'sans-serif'],
        'Raleway': ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}