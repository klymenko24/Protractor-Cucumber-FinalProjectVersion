exports.config = {
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./src/features/*.feature'],
  cucumberOpts: {
    require: ['./src/step_defenitions/CustomerSteps.js'],
    //format: ['./features/support/Reporter.js']
  },
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--no-sandbox']
    },
  },
  SELENIUM_PROMISE_MANAGER: false,
  directConnect: false,
  baseUrl: 'http://www.way2automation.com/angularjs-protractor/banking/#/login',
};
