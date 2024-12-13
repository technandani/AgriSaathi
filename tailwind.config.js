/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Enable dark mode via class
  theme: {
    extend: {
      colors: {
        darkBg: '#04130B',
        lightText: '#fff',
        darkText: '#000',
        lightBg: '#fff',
      },
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

