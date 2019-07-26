"use strict";

var clickElement = require('../../common/action/clickElement');
/**
 * Perform a click action on the given hyperlink
 *
 * @param  {String}   linkText  The text displayed for the hyperlink
 */


module.exports = function (linkText) {
  clickElement('click', 'selector', "//a[@data-hook='".concat(linkText.toLowerCase().split(' ').join('-'), "']"));
};