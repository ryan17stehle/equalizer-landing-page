/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'teal': '#66e2dc',
      'red-orange': '#fa7453',
      'goldenrod': '#ffb964',
      'offwhite': '#fcfaf9',
      'black': "#191826"
    },
    extend: {
      fontSize: {
        'xl': ['88px', '88px'],
        'lg': ['40px', '52px'],
        'med': ['20px', '34px'],
        'base': ['16px', '26px']
      },
      backgroundImage: {
        'main-pattern-mobile': "url('../../public/bg-main-mobile.png')",
        'main-pattern-tablet': "url('../../public/bg-main-tablet.png')",
        'main-pattern-desktop': "url('../../public/bg-main-desktop.png')",
      },
      backgroundPosition: {
        'hero-position-mobile': 'top -200px left 50px',
        'hero-position-tablet': 'top -350px left -350px'
      },
    },
  },
  plugins: [],
}
