"use strict";

/**
 * Check the selected state of the given element
 * @param  {String}   element   Element selector
 * @param  {String}   falseCase Whether to check if the element is selected or
 *                              not
 */
module.exports = function (element, falseCase) {
  /**
   * The selected state
   * @type {Boolean}
   */
  var isSelected = browser.isSelected(element);

  if (falseCase) {
    expect(isSelected).to.not.equal(true, "\"".concat(element, "\" should not be selected"));
  } else {
    expect(isSelected).to.equal(true, "\"".concat(element, "\" should be selected"));
  }
};