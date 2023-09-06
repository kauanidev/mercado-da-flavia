import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          light: "#A881E6",
          DEFAULT: "#7450AC",
          dark: "#523480",
        },
        gray: {
          600: "#0C0C0D",
          500: "#111112",
          400: "#17171A",
          300: "#252529",
          200: "#AFABB6",
          100: "#FBF9FE",
        },
        feedback: {
          success: "#2F723D",
          "success-light": "#4E995E",
        },
        apoio: {
          pink: "#DB5BBF",
          orange: "#E07B67",
          yellow: "#BB9F3A",
          green: "#8CAD51",
          blue: "#7B94CB",
          cyan: "#51ADA8",
          brown: "#724E33",
          purple: "#6951AD",
          red: "#AA4040",
          "pink-dark": "#251622",
          "orange-dark": "#261A17",
          "yellow-dark": "#211E12",
          "green-dark": "#1C2015",
          "blue-dark": "#1A1D23",
          "cyan-dark": "#192424",
          "brown-dark": "#291D15",
          "purple-dark": "#191720",
          "red-dark": "#241010",
          "white-dark": "#212121",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
