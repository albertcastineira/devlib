/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "dm-mono": ['DM Mono', 'monospace'],
        "dm-sans": ['DM Sans', 'sans-serif'],
      },
      colors: {
        'dark': {
          100: '#ACACAC',
          200: '#292929',
          300: '#1E1E1E',
          400: '#121212'
        },
      }
    },
  },
  plugins: [],
}

