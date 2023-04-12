/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'spotify': '#1ED760',
      },
    },
  },
  plugins: [require('tailwindcss-font-inter')]
}

