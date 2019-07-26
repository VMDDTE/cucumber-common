"use strict";

/**
 * Determine if the specified number of Error Messages exists on the page
 *
 * @param  {number}   howMany  The expected number of error messages
 */
module.exports = function (howMany) {
  var selector = "//div[@class=\"govuk-form-group govuk-form-group--error\"]//span[@class=\"govuk-error-message\"]";
  var errorMessage = "Element with selector \"".concat(selector, "\" should exist ").concat(howMany, " times on the page");
  var errorMessagesOnPage = browser.elements(selector).value;
  expect(errorMessagesOnPage).to.have.lengthOf(howMany, errorMessage);
};