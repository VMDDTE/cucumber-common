"use strict";

/**
 * Converts the given string to "a_string_like_this"
 *
 * @param {string} text The text to use in a data-hook
 */
var toDataHook = function toDataHook(text) {
  return text.toLowerCase().split(' ').join('_');
};

module.exports = toDataHook;