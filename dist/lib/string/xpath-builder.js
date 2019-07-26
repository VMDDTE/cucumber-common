"use strict";

var elements = require('../json/elements.json');
/**
 * Extracts a list of valid elements from the elements json file
 *
 * @param {string} elementType The type of element to look for (e.g. 'header')
 */


var elementExtractor = function elementExtractor(elementType) {
  var array = elements.find(function (f) {
    return f.name === elementType.toLowerCase();
  }); // Check that the array has been populated

  if (!array) throw new Error("'".concat(elementType, "' is not a valid element type")); // Check that the `elements` object contains an array

  if (!Array.isArray(array.elements)) throw new Error("The elements object for '".concat(elementType, "' must be an array"));
  return array.elements;
};
/**
 * Builds an XPath from a filtered list of elements
 *
 * @param {string} elementType The type of element to look for (e.g. 'header')
 */


var xPathBuilder = function xPathBuilder(elementType) {
  try {
    var array = elementExtractor(elementType).map(function (el) {
      return "self::".concat(el);
    }).join(' or ');
    return "//*[".concat(array, "]");
  } catch (e) {
    return console.error(e);
  }
};
/**
 * Builds an XPath using xPathBuilder with a string at the end
 *
 * @param {string} elementType The type of element to look for (e.g. 'header')
 * @param {string} text the content of the element
 */


var xPathWithText = function xPathWithText(elementType, text) {
  return xPathBuilder(elementType).replace(']', " and normalize-space()=\"".concat(text, "\"]"));
};

var xPathWithDataHook = function xPathWithDataHook(elementType, dataHook) {
  var xpath = xPathBuilder(elementType);
  var mutatedXpath = '';

  if (xpath.match(/ or/gm)) {
    mutatedXpath = xpath.replace(/ or/gm, "[contains(@data-hook, \"".concat(dataHook, "\")] or")).replace(/\]\]/, "][contains(@data-hook, \"".concat(dataHook, "\")]]"));
  } else {
    mutatedXpath = xpath.replace(/\]/, "[contains(@data-hook, \"".concat(dataHook, "\")]]"));
  }

  return mutatedXpath;
}; // TODO: https://vmddefra.atlassian.net/browse/SIS-3659


var xPathWithDataHookAndText = function xPathWithDataHookAndText(elementType, dataHook, text) {
  return xPathBuilder(elementType).replace(/ or/gm, "[contains(@data-hook, \"".concat(dataHook, "\")] or")).replace(']', "and normalize-space()=\"".concat(text, "\"]"));
};

module.exports = {
  elementExtractor: elementExtractor,
  xPathBuilder: xPathBuilder,
  xPathWithText: xPathWithText,
  xPathWithDataHook: xPathWithDataHook,
  xPathWithDataHookAndText: xPathWithDataHookAndText
};