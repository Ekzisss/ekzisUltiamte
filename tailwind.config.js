/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ui1: '#2E335A',
        ui2: '#454B79',
        ui3: '#0C1033',
        ui4: '#1D234D',
        uii1: '#48319D',
        uii2: '#8015A7',
        uii3: '#2E335A',
        uii4: '#613690',
        uii5: '#8322FF',
        uii6: '#1D1C34',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
