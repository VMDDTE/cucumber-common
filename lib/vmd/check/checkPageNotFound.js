const checkElementExists = require ('../../common/check/checkElementExists')

/**
 * Determines if the 404 Page Not Found error page is displayed
 */
module.exports = () => {
  const selector = `//div/div/div/div/h1[@class="govuk-heading-xl"]`
  checkElementExists(selector)
}