"use strict";

var checkElementExists = require('../../common/check/checkElementExists');
/**
 * Look for a Link on a page constructed using the govuk-frontend/summary-list control
 *
 * @param {any} linkIdentifier The identifier specified as the 'visuallyHiddenText' attribute of the summary item
 */


module.exports = function (linkIdentifier) {
  var selector = "//a[@class=\"govuk-link\"]/span[@class=\"govuk-visually-hidden\"][contains(.,\"".concat(linkIdentifier, "\")]");
  checkElementExists(selector);
};