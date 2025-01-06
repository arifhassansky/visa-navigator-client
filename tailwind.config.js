/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2FC351",
        secondary: "#FBB03B",
      },
      fontFamily: {
        primary: "Poppins",
        secondary: "Rancho",
      },
    },
  },
  plugins: [daisyui],
};
