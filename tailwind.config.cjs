/** @type {import('tailwindcss').Config} */
const labelsClasses = ["indigo", "gray", "green", "blue", "red", "purple"];

module.exports = {
  content: [
    // Next.js
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    //vite settings
    "./index.html",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // Because we made a dynamic class with the label we need to add those clases
  // to the safe list so the purge does not remove that
  safelist: [
    ...labelsClasses.map((lbl) => `bg-${lbl}-500`),
    ...labelsClasses.map((lbl) => `bg-${lbl}-200`),
    ...labelsClasses.map((lbl) => `text-${lbl}-400`),
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["Open Sans", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      fontSize: {
        14: "14px",
      },
      backgroundColor: {
        "main-bg": "#FAFBFB",
        "main-dark-bg": "#20232A",
        "secondary-dark-bg": "#33373E",
        "light-gray": "#F7F7F7",
        "half-transparent": "rgba(0, 0, 0, 0.5)",
        "handbook-page-bg": "#1E293B",
      },
      borderWidth: {
        1: "1px",
      },
      borderColor: {
        color: "rgba(0, 0, 0, 0.1)",
      },
      width: {
        400: "400px",
        760: "760px",
        780: "780px",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px",
      },
      height: {
        80: "80px",
      },
      minHeight: {
        590: "590px",
      },
      backgroundImage: {
        "hero-pattern": "url('https://wallpaperaccess.com/full/3331321.jpg')",
      },
      gridTemplateColumns: {
        "1/5": "1fr 5fr",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
