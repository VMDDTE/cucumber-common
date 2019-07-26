"use strict";

/**
 * Check the text of a modal
 * @param  {String}   modalType     The type of modal that is expected
 *                                  (alertbox, confirmbox or prompt)
 * @param  {String}   falseState    Whether to check if the text matches or not
 * @param  {String}   expectedText  The text to check against
 */
module.exports = function (modalType, falseState, expectedText) {
  try {
    /**
         * The text of the current modal
         * @type {String}
         */
    var text = browser.alertText();

    if (falseState) {
      expect(text).to.not.equal(expectedText, "Expected the text of ".concat(modalType, " not to equal ") + "\"".concat(expectedText, "\""));
    } else {
      expect(text).to.equal(expectedText, "Expected the text of ".concat(modalType, " to equal ") + "\"".concat(expectedText, "\", instead found \"").concat(text, "\""));
    }
  } catch (e) {
    assert(e, "A ".concat(modalType, " was not opened when it should have been opened"));
  }
};