/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scans all JS/JSX/TS/TSX files in the src folder
    "./public/index.html",        // Include your HTML file if applicable
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f0fbff',
        secondary: '#00a8e6',
        secondarydark: '#55a8ff'
      }
    }, // Add customizations here if needed (e.g., colors, spacing)
  },
  plugins: [], // Add Tailwind plugins here if you need them (e.g., forms, typography)
}