import clickElement from '../../action/clickElement'

/**
 * Select a radio button option based on the display text
 * 
 *
 * @param  {String}   optionText    The display text for the option to be selected
 */
module.exports = (optionText) => {
   clickElement('click', 'selector', `//label[contains(., "${optionText}")]/ancestor::div/input[@type='radio']`)
}