import checkElementNotExists from '../../check/checkElementNotExists'

/**
 * Determine if a radio option does not exist with the given text
 *
 * @param  {String}   optionText  The text displayed for the radio option
 */
module.exports = (optionText) => {
   const selector = `//label[contains(., "${optionText}")]/ancestor::div/input[@type="radio"]`

   checkElementNotExists(selector)
}
