const selectRadioButtonOption = require ('./selectRadioButtonOption')
const clickContinue = require ("./clickContinue")

/**
 * Selects a radio button option and clicks the Continue button
 * 
 * @param {any} selectedOption The display text of the radio option to select
 */
module.exports = (selectedOption) => {
   selectRadioButtonOption(selectedOption)
   clickContinue()
}
