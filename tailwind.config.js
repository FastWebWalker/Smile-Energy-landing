/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    "bg-[#A4000A]", // Add any specific classes
    "bg-red-500", // Add Tailwind colors
  ],
  theme: {
    extend: {
      colors: {
        redCustom: "#A4000A",
      },
    },
  },
  plugins: [],
};
