"use strict";

var checkElementNotExists = require('../../common/check/checkElementNotExists');
/**
 * Determine if a radio option does not exist with the given text
 *
 * @param  {String}   optionText  The text displayed for the radio option
 */


module.exports = function (optionText) {
  var selector = "//label[contains(., \"".concat(optionText, "\")]/ancestor::div/input[@type=\"radio\"]");
  checkElementNotExists(selector);
};