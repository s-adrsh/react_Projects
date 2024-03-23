/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cardColor: {
          100: "#5694F2",
          200: "#FEC347",
          300: "#53C2C5",
          400: "#F26E56",
        },
      },
    },
  },
  plugins: [],
};
