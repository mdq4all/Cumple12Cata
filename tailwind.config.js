/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'beach-desktop': "url('assets/bg-desktop.jpeg')",
        'beach-pattern': "url('assets/bg-playa.jpeg')"
      }
    },
    fontFamily: {
      'playfair': ['Playfair Display', 'serif'],
      'ephesis': ['Ephesis', 'cursive'],

    },
    colors: {
      'almost-white': '#000000',
    },
  },
  plugins: [],
}