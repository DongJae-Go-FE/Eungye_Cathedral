/** @type {import('tailwindcss').Config} */

import { colors, tokens, typography } from "./src/foundations";
// eslint-disable-next-line
const fontSize: any = {};

Object.entries(typography).forEach(([key, { fontSize: size, ...values }]) => {
  fontSize[key] = [size, values];
});

module.exports = {
  "tailwindcss/nesting": "postcss-nesting",
  "postcss-preset-env": {
    features: { "nesting-rules": false },
  },
  ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),

  content: ["./src/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Pretendard"],
    },
    extend: {
      colors,
      fontSize,
      tokens,
      animation: {
        fadeInUp: "fadeInUp 1s ease-in-out",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: 0,
            transform: "translateY(8%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
    },
    screens: {
      mobile: "0px",
      tablet: "727px",
      desktop: "1280px",
    },
  },
  plugins: [],
};
