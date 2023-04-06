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
        'accent-3': '#F3F4F6',
        'accent-4': '#D9D9D9',
      },
      transformOrigin: {
        0: '0%',
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
