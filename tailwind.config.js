module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // <-- includes all pages/components
  ],
  theme: {
    extend: {
      fontFamily: {
      caveat: ["Caveat", "cursive"],
      rouge: ["'Rouge Script'", "cursive"],
    },
    },
  },
  plugins: [],
};