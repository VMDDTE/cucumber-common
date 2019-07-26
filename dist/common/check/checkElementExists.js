"use strict";

var checkIfElementExists = require('./checkIfElementExists');
/**
 * Check if the given element exists
 * @param  {String}   elem       Element selector
 */


module.exports = function (elem) {
  checkIfElementExists(elem, false);
};