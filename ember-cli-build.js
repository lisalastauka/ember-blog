/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var Funnel = require('broccoli-funnel');
  var app = new EmberApp(defaults, {
    nodeModulesToVendor: [
      new Funnel('node_modules/bootstrap/dist', {
        destDir: '/bootstrap'
      })
    ]
  });

  var bootstrapFonts = new Funnel('node_modules/bootstrap/dist/fonts', {
    srcDir: '/',
    include: ['**/*.*'],
    destDir: '/fonts'
  });

// then you can easily do
  app.import('vendor/bootstrap/css/bootstrap.min.css');
  app.import('vendor/bootstrap/js/bootstrap.min.js');

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree([bootstrapFonts]);
};
