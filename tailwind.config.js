/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        light: 'rgb(231, 229, 228)',
        dark: '#000051',
        accent: '#4A90E2', // Aggiungi un colore di accento
        secondary: '#E63946', // Aggiungi un altro colore complementare
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')], // plugin per nascondere la barra di scorrimento
  darkMode: 'class',
};
