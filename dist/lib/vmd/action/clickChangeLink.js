"use strict";

/**
 * Click on the change link on a summary page
 *
 * @param  {String}   linkId  The id of the link to click
 */
module.exports = function (linkId) {
  var element = "//a[@class=\"govuk-link\"]/span[@class=\"govuk-visually-hidden\"][contains(.,\"".concat(linkId, "\")]/ancestor::a");
  var link = browser.elements(element).value[0];
  link.click();
};