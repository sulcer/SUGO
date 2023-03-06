/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,scss}'],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#ffffff',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
