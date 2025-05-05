/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
        secondary: "#22d3ee",
        tertiary: "#1e293b",
        textPrimary: "#f8fafc",
        textSecondary: "#94a3b8",
        accent: "#f472b6",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 15px rgba(34, 211, 238, 0.3)',
      },
    },
  },
  plugins: [],
} 