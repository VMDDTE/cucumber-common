const clickElement = require ('../../common/action/clickElement')

/**
 * Perform a click action on the given hyperlink
 *
 * @param  {String}   linkText  The text displayed for the hyperlink
 */
module.exports = (linkText) => {
   clickElement('click', 'selector', `//a[@data-hook='${linkText.toLowerCase().split(' ').join('-')}']`)
}
