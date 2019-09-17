const { CucumberJSAllureFormatter, AllureRuntime } = require('cucumberjs-allure2-reporter');

function Reporter(options) {
  CucumberJSAllureFormatter.call(this,
    options,
    new AllureRuntime({ resultsDir: './target/allure-results' }),
    {});
}
Reporter.prototype = Object.create(CucumberJSAllureFormatter.prototype);
Reporter.prototype.constructor = Reporter;

exports.default = Reporter;