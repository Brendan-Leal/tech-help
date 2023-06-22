/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      deepOrange: "#BF8D30",
      yellow: "#D9B70D",
      lightBlue: "#A3D0FC",
      "dark-blue": "#09182D",
      accentBlue: "##2D4B73",
    },
    extend: {
    }
  },
  plugins: [],
}
