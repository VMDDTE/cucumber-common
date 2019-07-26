"use strict";

var checkIfElementExists = require('../check/checkIfElementExists');
/**
 * Perform an click action on the given element
 * @param  {String}   action  The action to perform (click or doubleClick)
 * @param  {String}   type    Type of the element (link or selector)
 * @param  {String}   element Element selector
 */


module.exports = function (action, type, element) {
  /**
   * Element to perform the action on
   * @type {String}
   */
  var elem = type === 'link' ? "=".concat(element) : element;
  /**
   * The method to call on the browser object
   * @type {String}
   */

  var method = action === 'click' ? 'click' : 'doubleClick';
  checkIfElementExists(elem);
  browser[method](elem);
};