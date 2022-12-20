/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content:  
  ["./src/pages/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        monument: ["Monument Extended"],
        neutralFace: ["Neutral Face"],
        segoe: ["Segoe UI"],
      },
    },
  },
  plugins: [],
};
