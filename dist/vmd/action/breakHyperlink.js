"use strict";

/**
 * Break the hyperlink so that it returns 404-Not Found
 *
 * @param {any} hyperlinkText
 */
module.exports = function (hyperlinkText) {
  var brokenLink = "".concat(browser.url().value, "/broken");
  var selector = "//a[@data-hook=\"".concat(hyperlinkText, "\"]");
  browser.execute(function (selector, brokenLink) {
    var element = document.evaluate(selector, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    element.setAttribute('href', brokenLink);
  }, selector, brokenLink);
};