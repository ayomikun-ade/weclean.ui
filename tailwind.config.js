/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      soft: ["Poppins"],
      hard: ['"Roboto Slab"'],
      logo: ["Cookie"],
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/back-blue.jpg')",
        "staff-pattern": "url('/src/assets/imgvector.jpg')",
      },
    },
  },
  plugins: [],
};
