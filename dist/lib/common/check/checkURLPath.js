"use strict";

/**
 * Check if the current URL path matches the given path
 * @param  {String}   falseCase    Whether to check if the path matches the
 *                                 expected value or not
 * @param  {String}   expectedPath The expected path to match against
 */
module.exports = function (falseCase, expectedPath) {
  /**
   * The URL of the current browser window
   * @type {String}
   */
  var currentUrl = browser.url().value.replace(/http(s?):\/\//, '');
  /**
   * The base URL of the current browser window
   * @type {Object}
   */

  var domain = "".concat(currentUrl.split('/')[0]);
  currentUrl = currentUrl.replace(domain, '');

  if (falseCase) {
    expect(currentUrl).to.not.equal(expectedPath, "expected path not to be \"".concat(currentUrl, "\""));
  } else {
    expect(currentUrl).to.equal(expectedPath, "expected path to be \"".concat(expectedPath, "\" but found ") + "\"".concat(currentUrl, "\""));
  }
};