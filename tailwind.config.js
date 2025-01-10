/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-navy': '#1A2A6C',
        'custom-cyan': '#1C92D2',
      },
      backgroundImage: {
        'professional-gradient': 'linear-gradient(to right, #1A2A6C, #1C92D2)',
      },
    },
  },
  plugins: [],
}

