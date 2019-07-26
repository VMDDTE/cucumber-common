"use strict";

var setInputField = require('../../common/action/setInputField');
/**
 * Sets a value for the given data hooked element
 *
 * @param {any} hook the data-hook attributed to use
 * @param {any} value The value  for the input field's data-hook attribute
 */


module.exports = function (hook, value) {
  var selector = "//input[@data-hook=\"".concat(hook, "\"]");
  setInputField('set', value, selector);
};