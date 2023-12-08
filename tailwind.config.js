/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["var(--font-lato)"],
        spartan: ["var(--font-spartan)"],
      },

      colors: {
        "deep-orange": "#BF8D30",
        yellow: "#D9B70D",
        "light-blue": "#A3D0FC",
        "dark-blue": "#09182D",
        "accent-blue": "#2D4B73",
      },
    },
  },
  plugins: [],
};
