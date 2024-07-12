/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {},
      fontFamily: {
        raleway: ['Raleway'],
        ralewayLight: ['Raleway-Light'],
        ralewaySemiBold: ['Raleway-SemiBold'],
      },
    },
  },
  plugins: [],
};
