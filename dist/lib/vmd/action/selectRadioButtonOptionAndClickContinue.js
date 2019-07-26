"use strict";

var selectRadioButtonOption = require('./selectRadioButtonOption');

var clickContinue = require('./clickContinue');
/**
 * Selects a radio button option and clicks the Continue button
 *
 * @param {any} selectedOption The display text of the radio option to select
 */


module.exports = function (selectedOption) {
  selectRadioButtonOption(selectedOption);
  clickContinue();
};