/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {},
      fontFamily: {
        dosis: ['Dosis'],
        dosisBold: ['Dosis Bold'],
        dosisSemiBold: ['Dosis SemiBold'],
        dosisLight: ['Dosis Light'],
      },
      colors: {
        background: '#e6c9af',
        foreground: '#fae7d7',
        darkBackground: '#191b1f',
        darkForeground: '#272a30',
        textColor: '#333533',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
