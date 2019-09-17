class BasePage {
  open(params) {
    return browser.get(browser.baseUrl)
  }

  waitForElement(elm) {
    const EC = protractor.ExpectedConditions;
    return browser.wait(EC.visibilityOf(elm), 5000);
  }
}

module.exports = BasePage;
