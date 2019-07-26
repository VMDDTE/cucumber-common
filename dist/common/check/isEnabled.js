"use strict";

/**
 * Check if the given element is enabled
 * @param  {String}   element   Element selector
 * @param  {String}   falseCase Whether to check if the given element is enabled
 *                              or not
 */
module.exports = function (element, falseCase) {
  /**
   * The enabled state of the given element
   * @type {Boolean}
   */
  var isEnabled = browser.isEnabled(element);

  if (falseCase) {
    expect(isEnabled).to.not.equal(true, "Expected element \"".concat(element, "\" not to be enabled"));
  } else {
    expect(isEnabled).to.equal(true, "Expected element \"".concat(element, "\" to be enabled"));
  }
};