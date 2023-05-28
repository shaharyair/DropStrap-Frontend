/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("prettier-plugin-tailwindcss")],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dropLogo: "#F9B505",
        backgroundBlack: "#101010",
        navbarBlack: "#131313",
      },
      transitionProperty: {
        left: "left",
        "max-width": "max-width",
      },
      transitionTimingFunction: {
        ease: "ease",
        in: "ease-in",
        out: "ease-out",
      },
    },
  },
  plugins: [],
};
