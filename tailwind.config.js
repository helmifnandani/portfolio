module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnightBlack: "#0D0D0D",
        dusty: "#181818",
        brand: "#524fe3",
        moon: "#F7F7FF",
      },
      fontFamily: {
        sans: ["var(--font-space-mono)", "monospace"],
      },
      transitionTimingFunction: {
        "brand-out": "cubic-bezier(0.23, 1, 0.32, 1)",
      },
    },
  },
  plugins: [],
};
