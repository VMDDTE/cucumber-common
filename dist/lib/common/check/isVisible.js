"use strict";

/**
 * Check if the given element is (not) visible
 * @param  {String}   element   Element selector
 * @param  {String}   falseCase Check for a visible or a hidden element
 */
module.exports = function (element, falseCase) {
  /**
   * Visible state of the give element
   * @type {String}
   */
  var isVisible = browser.isVisible(element);

  if (falseCase) {
    expect(isVisible).to.not.equal(true, "Expected element \"".concat(element, "\" not to be visible"));
  } else {
    expect(isVisible).to.equal(true, "Expected element \"".concat(element, "\" to be visible"));
  }
};