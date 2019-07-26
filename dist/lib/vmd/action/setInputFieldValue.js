"use strict";

var setInputField = require('../../common/action/setInputField');
/**
 * Sets the value of the given input field to that value specified
 *
 * @param   { value }     The value
 * @param   { dataHook }  The data-hook value of the element to select
 */


module.exports = function (value, dataHook) {
  var selector = "//input[@data-hook=\"".concat(dataHook, "\"]");
  expect(browser.elements(selector).value).to.have.lengthOf(1);
  setInputField('set', value, selector);
};