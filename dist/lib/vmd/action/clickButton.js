"use strict";

var clickElement = require('../../common/action/clickElement');
/**
 * Click on the submit button whose text is that specified
 *
 * @param  {String}   buttonId  The text displayed on the button, this is used as the button's id
 */


module.exports = function (buttonId) {
  clickElement('click', 'selector', "//*[@data-hook='".concat(buttonId.toLowerCase().split(' ').join('-'), "-button']"));
};