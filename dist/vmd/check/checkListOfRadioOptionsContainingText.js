"use strict";

/**
 * Ascertain as to whether or not there exist a number of radio options containing the specified text
 *
 * @param  {String}   contained  The text to be found in the displayed text for one or more radio options
 */
module.exports = function (contained) {
  var selector = "//label[contains(., \"".concat(contained, "\")]/ancestor::div/input[@type=\"radio\"]");
  var options = browser.elements(selector).value;
  expect(options).length.to.have.length.greaterThan(0);
};