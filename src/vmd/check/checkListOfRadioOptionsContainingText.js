
/**
 * Ascertain as to whether or not there exist a number of radio options containing the specified text
 *
 * @param  {String}   contained  The text to be found in the displayed text for one or more radio options
 */
module.exports = (contained) =>  {
   const selector = `//label[contains(., "${contained}")]/ancestor::div/input[@type="radio"]`;
   const options = browser.elements(selector).value

   expect(options).length.to.have.length.greaterThan(0)
}
