"use strict";

/**
 * Check the offset of the given element
 * @param  {String}   elem              Element selector
 * @param  {String}   falseCase         Whether to check if the offset matches
 *                                      or not
 * @param  {String}   expectedPosition  The position to check against
 * @param  {String}   axis              The axis to check on (x or y)
 */
module.exports = function (elem, falseCase, expectedPosition, axis) {
  /**
   * Get the location of the element on the given axis
   * @type {[type]}
   */
  var location = browser.getLocation(elem, axis);
  /**
   * Parsed expected position
   * @type {Int}
   */

  var intExpectedPosition = parseInt(expectedPosition, 10);

  if (falseCase) {
    expect(location).to.not.equal(intExpectedPosition, "Element \"".concat(elem, "\" should not be positioned at ") + "".concat(intExpectedPosition, "px on the ").concat(axis, " axis"));
  } else {
    expect(location).to.equal(intExpectedPosition, "Element \"".concat(elem, "\" should be positioned at ") + "".concat(intExpectedPosition, "px on the ").concat(axis, " axis, but was found ") + "at ".concat(location, "px"));
  }
};