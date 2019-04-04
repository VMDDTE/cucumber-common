const setInputField = require ('../../common/action/setInputField')

/**
 * Sets the value of the given input field to that value specified
 *
 * @param   { value }     The value 
 * @param   { dataHook }  The data-hook value of the element to select
 */
module.exports = (value, dataHook) => {

  const selector = `//input[@data-hook="${dataHook}"]`


  expect(browser.elements(selector).value).to.have.lengthOf(1)
  setInputField('set', value, selector)
}