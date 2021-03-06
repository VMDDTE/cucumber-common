/**
 * Removes the given element = require (the DOM.
 * @param  {String}   element  Element selector
 */
module.exports = (element) => {
    browser.execute(function (element) { return document.getElementById(element).remove() }, element)
}
