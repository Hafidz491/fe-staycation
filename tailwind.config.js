/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        firstColor: "#3252DF",
        secondColor: "#152C5B",
        thirdColor: "#B0B0B0",
        bannerSpecial: "#FF498B",
      },
    },
  },
  plugins: [],
};
