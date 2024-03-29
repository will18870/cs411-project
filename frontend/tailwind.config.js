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
      }, keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" }
        }
      },
      animation: {
        wiggle: "wiggle 200ms ease-in-out"
      },
      screens: {
        'sm': '576px',
        'md': '960px',
        'lg': '1440px',
        'xl': '1920px',
        '2xl': '2560px',
      },
    },
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
      'mm':'0px'
    },
  },
  plugins: [require('tailwindcss-font-inter')]
}

