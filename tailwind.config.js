/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      // Custom finance-themed colors
      colors: {
        primary: '#1A237E', // Deep blue for trust
        accent: '#43A047',  // Green for money/growth
        gold: '#FFD700',    // Gold for premium/professional feel
        light: '#F5F7FA',   // Light gray for backgrounds
        dark: '#212121',    // Dark for text or backgrounds
      },
      // Custom font family
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'], // Modern, readable font
      },
      animation: {
        'spin': 'spin 1s linear infinite',
      }
    },
  },
  plugins: [],
};