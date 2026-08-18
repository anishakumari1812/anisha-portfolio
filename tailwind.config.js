/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      colors: {
        bg: "#0f172a",        // dark blue background
        card: "#1e293b",      // card background
        bg3: "#020617",       // darker section

        accent: "#6366f1",    // main bluish-purple
        accent2: "#8b5cf6",   // purple
        accent3: "#a78bfa",   // light purple

        muted: "#94a3b8",     // text color
      },
    },
  },
  plugins: [],
};