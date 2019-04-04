const setInputField = require('../../common/action/setInputField')

/**
 * Sets a value for the given data hooked element
 *
 * @param {any} hook the data-hook attributed to use
 * @param {any} value The value  for the input field's data-hook attribute
 */
module.exports = (hook, value) => {
    const selector = `//input[@data-hook="${hook}"]`
    setInputField('set', value, selector)
}
