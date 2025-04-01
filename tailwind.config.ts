/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        hans: ["var(--font-black-han-sans)"],
      },
      keyframes: {
        flicker: {
          "0%, 100%": {
            opacity: 0,
            "text-shadow": "none",
          },
          "10%, 30%, 50%, 70%, 90%": {
            opacity: 1,
            "text-shadow": "0 0 10px rgba(255, 255, 255, 0.5)",
          },
          "20%, 40%, 60%, 80%": {
            opacity: 0,
            "text-shadow": "none",
          },
        },
      },
      animation: {
        flicker: "flicker 4s linear both",
      },
    },
  },
  plugins: [],
};
