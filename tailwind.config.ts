import type { Config } from "tailwindcss";

export default {
  content: [
 "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGray: "#f7f8f9",
        mediumGray: "#c3c3c39d",
        darkGray: "#454343",
        red: "#ff0000",
        purple: "#aa7eca",
        white: "#FFFFFF",
        black: "#000000",
        transparent: "rgba(0, 0, 0, 0)",
        mediumBlue: "#1d6a8c",
      },
      fontFamily: {
        'inter-bold': ['var(--font-inter-bold)'],
        'inter-extrabold': ['var(--font-inter-extrabold)'],
        'inter-light': ['var(--font-inter-light)'],
        'inter-extralight': ['var(--font-inter-extralight)'],
        'inter-medium': ['var(--font-inter-medium)'],
      },
      screens: {
        "screen-size-26": "2600px", 
        "screen-size-23": "2300px", 
        "screen-size-21": "2100px", 
        "screen-size-20": "2000px", 
        "screen-size-18": "1850px", 
        "screen-size-16": "1650px", 
        "screen-size-15": "1550px", 
        "screen-size-13": "1300px",
        "screen-size-12": "1200px", 
        "screen-size-10": "1000px", 
        "screen-size-8": "800px", 
        "screen-size-6": "660px", 
        "screen-size-5": "570px", 
        "screen-size-4": '400px',
      },
    },
  },
  plugins: [],
} satisfies Config;
