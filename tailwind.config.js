/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('assets/wall_rosas.jpg')",

      }
    },
    fontFamily: {
      'ephesis': ['Ephesis', 'cursive'],
      'playfair': ['Playfair Display', 'serif']

    },
    colors: {
      'almost-white': '#000000',
    },
  },
  plugins: [],
}