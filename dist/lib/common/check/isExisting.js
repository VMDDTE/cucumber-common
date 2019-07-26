"use strict";

/**
 * Check if the given element exists in the current DOM
 * @param  {String}   selector  Element selector
 * @param  {String}   falseCase Whether to check if the element exists or not
 */
module.exports = function (selector, falseCase) {
  /**
   * Elements found in the DOM
   * @type {Object}
   */
  var elements = browser.elements(selector).value;

  if (falseCase) {
    expect(elements).to.have.lengthOf(0, "Expected element \"".concat(selector, "\" not to exist"));
  } else {
    expect(elements).to.have.length.above(0, "Expected element \"".concat(selector, "\" to exist"));
  }
};