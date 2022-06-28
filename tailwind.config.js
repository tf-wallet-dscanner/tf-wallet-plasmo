/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  darkMode: 'class',
  content: ['./**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Georgia', 'serif'],
    },
    extend: {
      colors: {
        primary: '#1976d2',
        secondary: '#9c27b0',
        error: '#ef5350',
        warning: '#ff9800',
        info: '#03a9f4',
        success: '#4caf50',
      },
      backgroundColor: {
        error: '#fdeded',
        warning: '#fff4e5',
        info: '#e5f6fd',
        success: '#edf7ed',
      },
    },
  },
  variants: { extend: { typography: ['dark'] } },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
