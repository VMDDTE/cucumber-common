const checkElementExists = require('../../common/check/checkElementExists')

/**
 * Determine if a radio option exists with the given text
 *
 * @param  {String}   optionText  The text displayed for the radio option
 */
module.exports = (optionText) => {
    const selector = `//label[contains(., "${optionText}")]/ancestor::div/input[@type="radio"]`

    checkElementExists(selector)
}
