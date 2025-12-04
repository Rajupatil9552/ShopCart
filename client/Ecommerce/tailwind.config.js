/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3A86FF",
        secondary: "#8338EC",
        cta: "#FF006E",
        bg: "#F7F7F7",
        text: "#1A1A1A",
      },
    },
  },
  plugins: [],
};
