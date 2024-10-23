/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')], // plugin per nascondere la barra di scorrimento
  darkMode: 'class',
};
