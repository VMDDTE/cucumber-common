"use strict";

/**
 * Check the content of a cookie against a given value
 * @param  {String}   name          The name of the cookie
 * @param  {String}   falseCase     Whether or not to check if the value matches
 *                                  or not
 * @param  {String}   expectedValue The value to check against
 */
module.exports = function (name, falseCase, expectedValue) {
  /**
   * The cookie retrieved = require (the browser object
   * @type {Object}
   */
  var cookie = browser.getCookie(name);
  expect(cookie.name).to.equal(name, "no cookie found with the name \"".concat(name, "\""));

  if (falseCase) {
    expect(cookie.value).to.not.equal(expectedValue, "expected cookie \"".concat(name, "\" not to have value \"").concat(expectedValue, "\""));
  } else {
    expect(cookie.value).to.equal(expectedValue, "expected cookie \"".concat(name, "\" to have value \"").concat(expectedValue, "\"") + " but got \"".concat(cookie.value, "\""));
  }
};