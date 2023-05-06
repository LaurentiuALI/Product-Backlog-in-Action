/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#F9540D",
          200: "#FB7F25",
        },
      },
      width: {
        100: "25rem",
      },
      height: {
        220: "55rem",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        "3xl": "1752px",
        "2k": { raw: "(min-height: 1200px)" },
        "4k": { raw: "(min-height: 1700px)" },
      },
    },
    plugins: [],
  },
};
