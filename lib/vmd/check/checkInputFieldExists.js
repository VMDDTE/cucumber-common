const checkElementExists = require ('../../common/check/checkElementExists')

/**
 * Check that a given <input .... /> element exists on the page
 *
 * @param {any} hook The value used for the input field's data-hook attribute
 */
module.exports = (hook) => {
  const selector = `//input[@data-hook="${hook}"]`
  checkElementExists(selector)
}