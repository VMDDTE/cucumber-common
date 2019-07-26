"use strict";

/**
 * Check the dimensions of the given element
 * @param  {String}   elem         Element selector
 * @param  {String}   falseCase    Whether to check if the dimensions match or
 *                                 not
 * @param  {String}   expectedSize Expected size
 * @param  {String}   dimension    Dimension to check (broad or tall)
 */
module.exports = function (elem, falseCase, expectedSize, dimension) {
  /**
   * The size of the given element
   * @type {Object}
   */
  var elementSize = browser.getElementSize(elem);
  /**
   * Parsed size to check for
   * @type {Int}
   */

  var intExpectedSize = parseInt(expectedSize, 10);
  /**
   * The size property to check against
   * @type {Int}
   */

  var originalSize = elementSize.height;
  /**
   * The label of the checked property
   * @type {String}
   */

  var label = 'height';

  if (dimension === 'broad') {
    originalSize = elementSize.width;
    label = 'width';
  }

  if (falseCase) {
    expect(originalSize).to.not.equal(intExpectedSize, "Element \"".concat(elem, "\" should not have a ").concat(label, " of ") + "".concat(intExpectedSize, "px"));
  } else {
    expect(originalSize).to.equal(intExpectedSize, "Element \"".concat(elem, "\" should have a ").concat(label, " of ") + "".concat(intExpectedSize, "px, but is ").concat(originalSize, "px"));
  }
};