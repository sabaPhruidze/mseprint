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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'inter-bold': ['var(--font-inter-bold)'],
        'inter-extrabold': ['var(--font-inter-extrabold)'],
        'inter-light': ['var(--font-inter-light)'],
        'inter-extralight': ['var(--font-inter-extralight)'],
        'inter-medium': ['var(--font-inter-medium)'],
      },
    },
  },
  plugins: [],
} satisfies Config;
