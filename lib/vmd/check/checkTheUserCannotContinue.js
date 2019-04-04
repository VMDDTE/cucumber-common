const clickContinue = require ('../action/clickContinue')

/**
 * Make sure there are not a "back link" or a submit button on the current page
 */
module.exports = () => {

  if (browser.element('//*[@data-hook="continue-button"]').value === null && browser.element("//a[@class='govuk-back-link']").value === null) {
    return
  }

  doSubmitCheck()
}

function doSubmitCheck() {
  const selector = '//*[@data-hook="continue-button"]'
  if (browser.element(selector).value.length === 0) {
    return
  }
  const currentUrl = browser.url().value
  clickContinue()
  expect(browser.url().value).to.equal(currentUrl)
}