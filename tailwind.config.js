/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/globals.css",
  ],
  theme: {
    extend: {
      ringColor: {
        "custom-green": "#4DA514", // Define your custom color
      },
      ringWidth: {
        3: "3px", // Optional: Define custom ring width if needed
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "custom-background": "#F5FAF1",
        "custom-green": "#4DA514",
        // Theme colors using CSS variables
        theme: {
          primary: 'var(--color-primary)',
          'primary-dark': 'var(--color-primary-dark)',
          secondary: 'var(--color-secondary)',
          accent: 'var(--color-accent)',
          accent2: 'var(--color-accent2)',
          background: 'var(--color-background)',
          surface: 'var(--color-surface)',
          text: 'var(--color-text)',
          'text-light': 'var(--color-text-light)',
          border: 'var(--color-border)',
        }
      },
      fontFamily: {
        cairo: ["Cairo", "sans-serif"], // Ensures the font is easily referenced
        sans: ["system-ui", "-apple-system", "sans-serif"],
        arabic: ["Cairo", "system-ui", "-apple-system", "sans-serif"],
      },
      textColor: {
        DEFAULT: "#000000", // Default text color set to black
      },
    },
  },
  plugins: [],
};

module.exports = config;
