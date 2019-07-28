"use strict";

/**
 * Check the given property of the given element
 * @param  {String}   isCSS         Whether to check for a CSS property or an
 *                                  attribute
 * @param  {String}   attrName      The name of the attribute to check
 * @param  {String}   elem          Element selector
 * @param  {String}   falseCase     Whether to check if the value of the
 *                                  attribute matches or not
 * @param  {String}   expectedValue The value to match against
 */
module.exports = function (isCSS, attrName, elem, falseCase, expectedValue) {
  /**
   * The command to use for fetching the expected value
   * @type {String}
   */
  var command = isCSS ? 'getCssProperty' : 'getAttribute';
  /**
   * Te label to identify the attribute by
   * @type {String}
   */

  var attrType = isCSS ? 'CSS attribute' : 'Attribute';
  /**
   * The actual attribute value
   * @type {Mixed}
   */

  var attributeValue = browser[command](elem, attrName);
  /**
   * when getting something with a color or font-weight WebdriverIO returns a
   * object but we want to assert against a string
   */

  if (attrName.match(/(font-size|line-height|display|font-weight)/)) {
    attributeValue = attributeValue.value;
  }

  if (falseCase) {
    expect(attributeValue).to.not.equal(expectedValue, "".concat(attrType, ": ").concat(attrName, " of element \"").concat(elem, "\" should not contain ") + "\"".concat(attributeValue, "\""));
  } else {
    expect(attributeValue).to.equal(expectedValue, "".concat(attrType, ": ").concat(attrName, " of element \"").concat(elem, "\" should contain ") + "\"".concat(attributeValue, "\", but \"").concat(expectedValue, "\""));
  }
};