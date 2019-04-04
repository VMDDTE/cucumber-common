
/**
 * Determine if the specified number of Error Messages exists on the page
 *
 * @param  {number}   howMany  The expected number of error messages
 */
module.exports = (howMany) => {
   const selector = `//div[@class="govuk-form-group govuk-form-group--error"]//span[@class="govuk-error-message"]`
   const errorMessage = `Element with selector "${selector}" should exist ${howMany} times on the page`
   const errorMessagesOnPage = browser.elements(selector).value

   expect(errorMessagesOnPage).to.have.lengthOf(howMany, errorMessage)
}