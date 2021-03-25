'use strict';

module.exports = {
  name: require('./package').name,

  isDevelopingAddon() {
    return true;
  },

  included(app) {
    this._super.included.apply(this, arguments);

    app.options = app.options || {};
    app.options.postcssOptions = {
      compile: {
        enabled: true,
        plugins: [
          require('postcss-import'),
          require('@tailwindcss/jit')('tailwind.config.js'),
        ],
        cacheInclude: [/.*\.(css|hbs)$/, /.*tailwind\.config\.js$/],
      },
    };
  },
};
