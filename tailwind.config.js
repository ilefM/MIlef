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
        darkTurquoise: '#141d22',
        customGray: '#d0d9e2',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
