"use strict";

/**
 * Check if the given string is part of the URL
 *
 * @param  {String}     expectedUrlPart   The string to check for
 * @param  {boolean}    falseCase         Whether to check if the given string is in the URL path or not
 */
module.exports = function (expectedUrlPart) {
  var falseCase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  /**
    * The URL of the current browser window
    * @type {String}
    */
  var currentUrl = browser.url().value;

  if (falseCase) {
    expect(currentUrl).to.not.contain(expectedUrlPart, "Expected URL \"".concat(currentUrl, "\" to not contain \"").concat(expectedUrlPart, "\""));
  } else {
    expect(currentUrl).to.contain(expectedUrlPart, "Expected URL \"".concat(currentUrl, "\" to contain \"").concat(expectedUrlPart, "\""));
  }
};