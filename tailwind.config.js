/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '660px',
      },
      fontFamily: {
        dosis: ['Dosis'],
        dosisBold: ['Dosis Bold'],
        dosisSemiBold: ['Dosis SemiBold'],
        dosisLight: ['Dosis Light'],
      },
      colors: {
        darkGreen: '#141d22',
        cream: '#eae0d5',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
