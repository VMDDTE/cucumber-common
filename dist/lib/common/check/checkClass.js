"use strict";

/**
 * Check if the given element has the given class
 * @param  {String}   elem              Element selector
 * @param  {String}   falseCase         Whether to check for the class to exist
 *                                      or not ('has', 'does not have')
 * @param  {String}   expectedClassName The class name to check
 */
module.exports = function (elem, falseCase, expectedClassName) {
  /**
   * List of all the classes of the element
   * @type {Array}
   */
  var classesList = browser.getAttribute(elem, 'className').split(' ');

  if (falseCase === 'does not have') {
    expect(classesList).to.not.include(expectedClassName, "Element ".concat(elem, " should not have the class ").concat(expectedClassName));
  } else {
    expect(classesList).to.include(expectedClassName, "Element ".concat(elem, " should have the class ").concat(expectedClassName));
  }
};