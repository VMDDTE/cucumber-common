"use strict";

var clickElement = require('../../common/action/clickElement');
/**
 * Click on the Continue button
 *
 */


module.exports = function () {
  clickElement('click', 'selector', '//*[@data-hook="continue-button"]');
};