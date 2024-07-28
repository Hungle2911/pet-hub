/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'black': '#0a0908',
      'red': '#cc2936',
      'orange': '#F4A261',
      'dark-orange': '#E76F51',
      'beige': '#f7b267',
      'white': '#ffffff',
    },
    fontFamily: {
      playwrite: ['"Playwrite BE VLG"', 'sans-serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
};

