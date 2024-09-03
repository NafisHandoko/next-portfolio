import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          mineshaft: "#252525",
          nero: "#FFFFFF",
          silver: "#BFBFBF",
          jumbo: "#888889",
          codgray: "#141414"
        },
        light: {
          mineshaft: "#E5E5E5",  // Lightened version of #252525
          nero: "#000000",       // Inverted version of #FFFFFF
          silver: "#404040",     // Darkened version of #BFBFBF
          jumbo: "#777777",      // Slightly darkened version of #888889
          codgray: "#EAEAEA"     // Lightened version of #141414
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
};
export default config;
