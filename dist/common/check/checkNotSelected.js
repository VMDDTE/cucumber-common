"use strict";

/**
 * Check the given element is NOT selected
 * @param  {String}   element   Element selector
 */
module.exports = function (element) {
  /**
     * The selected state
     * @type {Boolean}
     */
  var isSelected = browser.isSelected(element);
  expect(isSelected).to.not.equal(true, "\"".concat(element, "\" should not be selected"));
};