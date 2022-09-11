const { rotate } = require("next/dist/server/lib/squoosh/impl");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
        xsm: { max: "375px" },
        // => @media (max-width: 375px) { ... }
      },
      keyframes: {
        rightToLeftSlide: {
          "0%": { transform: "rotate(-3deg)" },
          "100%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        rightToLeftSlide: "rightToLeftSlide 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
