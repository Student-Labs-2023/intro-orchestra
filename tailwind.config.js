/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        chatBorder: "#CCC",
        bottomBar: "#e1e3e6",
        raspberryPink: "#E03FAB",
      },
      boxShadow: {
        topBar: "0px 3px 4px 0px rgba(217, 217, 217, 0.35)",
      },
      screens: {
        "3xl": { min: "1800px" },
      },
    },
  },
  plugins: [],
};
