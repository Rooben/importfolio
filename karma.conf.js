// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2015-06-11 using
// generator-karma 1.0.0

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: [
      "jasmine"
    ],


    // list of files / patterns to load in the browser
    files: [
      // bower:js
      'app/bower_components/jquery/dist/jquery.js',
      'app/bower_components/angular/angular.js',
      'app/bower_components/bootstrap/dist/js/bootstrap.js',
      'app/bower_components/angular-ui-router/release/angular-ui-router.js',
      'app/bower_components/angular-resource/angular-resource.js',
      'app/bower_components/greensock/src/uncompressed/TweenMax.js',
      'app/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'app/bower_components/highcharts-release/highcharts.js',
      'app/bower_components/highcharts-release/highcharts-more.js',
      'app/bower_components/highcharts-release/modules/exporting.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      // endbower

        //'app/pages/**/*.js',
        //'app/pages/imagesDisplay/gridDisplay/directives/grid_custom_modal-directive.js',
        //'app/pages/imagesDisplay/gridDisplay/directives/grid_display-directive.js',
        //'app/pages/imagesDisplay/gridDisplay/grid-controller.js',
        //'app/pages/imagesDisplay/imagesDisplay-app.js',
        //'app/pages/imagesDisplay/gridDisplay/**/*.js',
        //'app/pages/imagesDisplay/stackedDisplay/**/*.js',
        //'app/shared/filters/wordreverse_spec.js',
        //'dist/scripts/**/*.js',
        //'app/pages/app.js',

       "app/pages/imagesDisplay/stackedDisplay/pagination.js",
       "app/pages/imagesDisplay/stackedDisplay/stacked-controller.js",
       "app/pages/imagesDisplay/gridDisplay/grid-controller.js",
       "app/shared/services/photos-factory-service.js",
       "app/shared/services/layOutService.js",
       "app/shared/filters/wordreverse.js",
       "app/pages/imagesDisplay/stackedDisplay/services/textModifier-filter-service.js",
       "app/pages/imagesDisplay/gridDisplay/directives/grid_display-directive.js",
       "app/pages/imagesDisplay/gridDisplay/directives/grid_custom_modal-directive.js",
       "app/pages/mainPages/home/home-controller.js",
       "app/pages/mainPages/home/services/greensockTo-service.js",
       "app/pages/mainPages/about/about-controller.js",
       "app/pages/mainPages/about/directives/carouselAbout-directive.js",
       "app/pages/mainPages/about/services/carouselData-service.js",
       "app/pages/mainPages/about/services/greensockFromTo-service.js",
       "app/pages/mainPages/skills/skills-controller.js",
       "app/pages/mainPages/skills/demos/skillsdemo-controller.js",
       "app/pages/mainPages/skills/demos/directives/barChart-directive.js",
       "app/pages/mainPages/skills/demos/directives/histogram-directive.js",
       "app/pages/mainPages/skills/demos/directives/lineGraph-directive.js",
       "app/pages/mainPages/skills/demos/directives/pieChart-directive.js",
       "app/pages/mainPages/projects/projects-controller.js",
       "app/pages/mainPages/contact/contact-controller.js",
       "app/shared/services/formValidation-service.js",
       "app/shared/libraries/css3-mediaqueries.js",
       "app/pages/mainPages/mainPages-app.js",
       "app/pages/imagesDisplay/imagesDisplay-app.js",
       "app/pages/app.js",
        
      'test/mock/**/*.js',
      'test/spec/**/*.js',
      'test/coverage/**/*.js'
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],

    // Which plugins to enable
    plugins: [
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-coverage'
    ],

    // Preprocessors
    preprocessors: {
      'app/pages/**/*.js': ['coverage']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],

    // Coverage reporter
    coverageReporter: {
      type: 'html',
      dir: 'coverage'
    },

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
