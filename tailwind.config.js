/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: {
            light: '#4A90E2',
            DEFAULT: '#004f7c', // Dunkelazure - main brand color
            dark: '#003556',    // Darker variant of dunkelazure
          },
          gold: '#D4AF37',
          grey: '#727376',      // Secondary dark grey
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}

