"use strict";

/**
 * Check the URL of the given browser window
 * @param  {String}   falseCase   Whether to check if the URL matches the
 *                                expected value or not
 * @param  {String}   expectedUrl The expected URL to check against
 */
module.exports = function (falseCase, expectedUrl) {
  /**
   * The current browser window's URL
   * @type {String}
   */
  var currentUrl = browser.url().value;

  if (falseCase) {
    expect(currentUrl).to.not.equal(expectedUrl, "expected url not to be \"".concat(currentUrl, "\""));
  } else {
    expect(currentUrl).to.equal(expectedUrl, "expected url to be \"".concat(expectedUrl, "\" but found ") + "\"".concat(currentUrl, "\""));
  }
};