/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html', '*.js'],
  
  theme: {
    screens: {
      sm: '428px',
      md: '720px',
      lg: '960px',
      xl: '1228px'
    },
    extend: {
      colors: {
        'White': 'rgb(255, 255, 255)',
        'Black': 'rgb(0,0,0)',
        'DarkGray': 'rgb(112, 112, 112)',
        'Orange': 'rgb(255, 119, 0)',

      }
    },
  },
  plugins: [],
}

