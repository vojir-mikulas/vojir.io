/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    screens: {
      'mobile': {'max': '767px'},      ...defaultTheme.screens,

    },
  },
  plugins: [],
}

