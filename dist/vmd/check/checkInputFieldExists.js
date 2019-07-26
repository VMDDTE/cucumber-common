"use strict";

var checkElementExists = require('../../common/check/checkElementExists');
/**
 * Check that a given <input .... /> element exists on the page
 *
 * @param {any} hook The value used for the input field's data-hook attribute
 */


module.exports = function (hook) {
  var selector = "//input[@data-hook=\"".concat(hook, "\"]");
  checkElementExists(selector);
};