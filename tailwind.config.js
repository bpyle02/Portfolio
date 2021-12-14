module.exports = {
  content: ["./src/**/*.{js,jsx}",],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'linkedin': '#0077B5',
        'twitter': '#1DA1F2'
      }),
      textColor: theme => theme('colors'),
      textColor: {
        'linkedin': '#0077B5',
        'twitter': '#1DA1F2'
      },
      colors: {
        zinc: {
          950: '#121214'
        }
      }
    },
  },
  plugins: [],
}
