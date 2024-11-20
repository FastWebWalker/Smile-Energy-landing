/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    "bg-[#A4000A]", // Add any specific classes
    "bg-red-500", // Add Tailwind colors
  ],
  theme: {
    extend: {
      keyframes: {
        "slide-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "slide-left": "slide-left 8s linear infinite",
      },
      colors: {
        redCustom: "#A4000A",
      },
    },
  },
  plugins: [],
};
