exports.config = {
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./features/*.feature'],
  cucumberOpts: {
    require: ['./step_defenitions/steps.js'],
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
