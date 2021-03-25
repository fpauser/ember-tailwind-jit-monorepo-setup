module.exports = {
  purge: ['./addon/**/*.{hbs,js,ts}', './tests/**/*.{hbs,js,ts}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#0b1f45',
          500: '#2196f3',
        },
      },
    },
  },
};
