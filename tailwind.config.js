/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable dark mode via class
  theme: {
    extend: {
      fontFamily:{
        Nuntio: ["Nunito", "serif"],
        Playfair: ["Playfair Display", "serif"],
        Roboto: ["Roboto Slab", "system-ui"],
        Lora: ["Lora", "system-ui"],
      },
      colors: {
        darkBg: "#04130B",
        lightText: "#fff",
        darkText: "#000",
        lightBg: "#fff",
      },
      animation: {
        clouds: "clouds 8s ease-in-out infinite",
        "clouds-slow": "clouds 12s ease-in-out infinite",
        sunshine: "sunshine 2s ease-in-out infinite",
      },
      keyframes: {
        clouds: {
          "0%, 100%": { transform: "translateX(15px)" },
          "50%": { transform: "translateX(0px)" },
        },
        sunshine: {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "100%": { transform: "scale(1.4)", opacity: "0" },
        },
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   darkMode: "class",
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
