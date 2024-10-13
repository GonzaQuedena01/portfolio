/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './index.html',
    './assets/styles/**/*.css',
    './js/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(var(--color-primary), 0.8)',
        secondary: 'var(--color-secondary)'
      },
      backgroundImage: theme => ({
        'linear-grey': 'linear-gradient(to right, #57687C 0%, #B4C7DD 100%)',
        'linear-red': 'linear-gradient(to left, #DDD8D5 0%, #F05F47 50%)',
        'linear-green': 'linear-gradient(to right, #51B8AC 0%, #75C842 100%)',
      }),
    },
  },
  plugins: [],
}
