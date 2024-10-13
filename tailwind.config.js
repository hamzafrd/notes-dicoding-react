/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fill": "repeat(auto-fill, minmax(0, 1fr))",
        "auto-fit": "repeat(auto-fit, minmax(min(240px, 100%), 1fr))",
      },
    },
  },
  plugins: [],
};
