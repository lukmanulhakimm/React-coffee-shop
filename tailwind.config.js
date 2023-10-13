/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      jakarta: "Plus Jakarta Sans",
      sacramento: "sacramento",
      rubik: "rubik",
    },
    extend: {
      colors: {
        primary: "#FF8906",
        secondary: "#F1F1F1",
        brown: "#8E6447",
        "dark-brown": "#542915",
        "dark-gray": "#777C82",
        gray: "#C3BEB7",
        "light-gray": "#F8F8F8",
        black: "#0B0909",
        danger: "#D00000",
      },
    },
  },
  safelist: ["bg-[#dd17b2]", "mt-[100px]", "md:mt-[186px]"],
  plugins: [],
};
