"use strict";

var checkElementExists = require('../../common/check/checkElementExists');
/**
 * Check if the <div> is present which contains the certificate application reference number
 *
 */


module.exports = function () {
  checkElementExists("//div[@class='govuk-panel__body'][@data-hook='application-reference']");
};