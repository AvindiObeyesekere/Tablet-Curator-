/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        tablet: "768px",
        "lg-tablet": "1024px",
        "xl-tablet": "1280px",
      },
    },
  },
  plugins: [],
}
