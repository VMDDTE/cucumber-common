"use strict";

/**
 * Perform an click action on the given element
 * @param  {number}   numberOfBoxesToTick  The number of boxes to select on the page
 */
module.exports = function (numberOfBoxesToTick) {
  var selector = "//input[@data-hook='check-box']";
  var checkBoxes = browser.elements(selector).value;

  for (var index = 0; index < numberOfBoxesToTick; index++) {
    checkBoxes[index].click();
  }
};