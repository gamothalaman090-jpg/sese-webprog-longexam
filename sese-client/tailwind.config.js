/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdfbf7',
          100: '#faf5ed',
          200: '#f5ead5',
          300: '#f0dfbd',
          400: '#e8c885',
          500: '#dab84d',
          600: '#c7a63d',
          700: '#a68530',
          800: '#856427',
          900: '#6b4f1e',
        },
        secondary: {
          50: '#f0f4f8',
          100: '#d9e2ef',
          200: '#b3c5df',
          300: '#8ca8cf',
          400: '#668abf',
          500: '#3b5998',
          600: '#2d4680',
          700: '#253a6a',
          800: '#1d2d54',
          900: '#162043',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
      },
    },
  },
  plugins: [],
}
