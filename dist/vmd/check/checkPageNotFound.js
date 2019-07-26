"use strict";

var checkElementExists = require('../../common/check/checkElementExists');
/**
 * Determines if the 404 Page Not Found error page is displayed
 */


module.exports = function () {
  var selector = "//div/div/div/div/h1[@class=\"govuk-heading-xl\"]";
  checkElementExists(selector);
};