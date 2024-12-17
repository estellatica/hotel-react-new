/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html", // HTML utama
    "./src/app/**/*.{js,jsx,ts,tsx}", // Semua komponen di dalam folder app
    "./src/app/**/*.css", // Jika CSS ada di dalam app
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2E43CD",
        secondary: "#F4DD2A",
        light: "#F5F5F5",
      },
    },
  },
  plugins: [],
};

