"use strict";

/**
 * Check if a cookie with the given name exists
 * @param  {[type]}   name      The name of the cookie
 * @param  {[type]}   falseCase Whether or not to check if the cookie exists or
 *                              not
 */
module.exports = function (name, falseCase) {
  /**
   * The cookie as retrieved = require (the browser
   * @type {Object}
   */
  var cookie = browser.getCookie(name);

  if (falseCase) {
    expect(cookie).to.equal(null, "Expected cookie \"".concat(name, "\" not to exists but it does"));
  } else {
    expect(cookie).to.not.equal(null, "Expected cookie \"".concat(name, "\" to exists but it does not"));
  }
};