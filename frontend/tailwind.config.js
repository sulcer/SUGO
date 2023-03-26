/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,scss}'],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#ffffff',
        accent: '#222222',
        'accent-2': '#e53e3e',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
