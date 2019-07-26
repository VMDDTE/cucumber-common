"use strict";

/**
 * Check the title of the current browser window contains expected text/title
 * @param  {Type}     falseCase     Whether to check if the title contains the
 *                                  expected value or not
 * @param  {Type}     expectedTitle The expected title
 */
module.exports = function (falseCase, expectedTitle) {
  /**
   * The actual title of the current browser window
   * @type {String}
   */
  var title = browser.getTitle();

  if (falseCase) {
    expect(title).to.not.contain(expectedTitle, "Expected title not to contain \"".concat(expectedTitle, "\""));
  } else {
    expect(title).to.contain(expectedTitle, "Expected title to contain \"".concat(expectedTitle, "\" \n                        but found \"").concat(title, "\""));
  }
};