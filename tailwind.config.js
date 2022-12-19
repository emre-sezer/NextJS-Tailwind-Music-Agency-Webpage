module.exports = {

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
  purge: [
    './public/**/*.html',
    "./app/**/*.{js,ts,jsx,tsx, html}",
    "./pages/**/*.{js,ts,jsx,tsx, html}",
    "./components/**/*.{js,ts,jsx,tsx, html}",
  ],
  
}