/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      black: "#0a0908",
      navy: "#0b0575", //red
      "custom-blue": "#130ade", //orange
      pink: "#EC86B4", //dark-orange
      "off-white": "#e8e8e8", //beige
      "soft-pink": "#F5A9C7",
      'red': '#cc2936',
      'cherry': '#D2042D',
      'neon-red': '#FF3131',
      white: "#ffffff",
    },
    fontFamily: {
      playwrite: ['"Playwrite BE VLG"', "sans-serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

