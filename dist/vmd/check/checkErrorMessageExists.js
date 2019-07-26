"use strict";

var checkElementExists = require('../../common/check/checkElementExists');
/**
 * Looks for an error message on the page
 */


module.exports = function () {
  var selector = "//div[@class=\"govuk-form-group govuk-form-group--error\"]//span[@class=\"govuk-error-message\"]";
  checkElementExists(selector);
};