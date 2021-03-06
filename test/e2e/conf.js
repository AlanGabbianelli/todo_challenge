exports.config = {

  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['toDoListFeature.js'],
  capabilities: { browserName: 'chrome' },

  jasmineNodeOpts: {
    showColors: true,
    print: function() {}
  },

  onPrepare: function() {
    require('protractor-http-mock').config = {
      rootDirectory: __dirname,
      protractorConfig: 'conf.js'
    };
    var SpecReporter = require('jasmine-spec-reporter');
    jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
  }
};
