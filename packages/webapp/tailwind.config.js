const config = require('@etjms/ui/tailwind.config');

module.exports = {
  ...config,
  purge: ['../ui/addon/**/*.{hbs,js,ts}', './app/**/*.{hbs,js,ts}'],
};
