module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],  //this is use to remove the unwanted css code from tailwind css
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: {
    extend: {
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};