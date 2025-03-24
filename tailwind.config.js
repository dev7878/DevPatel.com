/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      colors: {
        primary: {
          DEFAULT: "#0070f3",
          dark: "#005cc5",
        },
        background: {
          DEFAULT: "#ffffff",
          dark: "#121212",
        },
        text: {
          DEFAULT: "#333333",
          dark: "#e0e0e0",
        },
      },
    },
  },
  plugins: [],
};
