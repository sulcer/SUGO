/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,scss}'],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#ffffff',
        accent: '#222222',
        'accent-2': '#e7f1ff',
        'accent-3': '#f5f5f5',
        'accent-4': '#f5f8fe',
        tint: '#0045f6',
        'tint-2': '#494949',
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
