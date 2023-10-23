/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '425px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gridTemplateColumns: {
        main: '[side] 300px [content] minmax(0px, 1fr)',
      },
      gridTemplateRows: {
        main: '[content] 100%',
        navbar: 'auto 1fr',
      },
      gridRow: {
        navbar: '1 / span 2',
      },
      gridCol: {
        navbar: 'side / span 1',
      },
    },
  },
  plugins: [],
};
