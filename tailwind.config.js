/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '600px'
      },
      fontFamily: {
        dosis: ['Dosis'],
        dosisBold: ['Dosis Bold'],
        dosisSemiBold: ['Dosis SemiBold'],
        dosisLight: ['Dosis Light'],
      },
      colors: {
        background: '#dbc6b6',
        foreground: '#efe9db',
        darkBackground: '#191b1f',
        darkForeground: '#272a30',
        textColor: '#333533',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
