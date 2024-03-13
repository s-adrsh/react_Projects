/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        card1: "#5694F2",
        card2: "#FEC347",
        card3: "#53C2C5",
        card4: "#F26E56",
      },
    },
  },
  plugins: [],
};
