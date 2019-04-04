import selectRadioButtonOption from './selectRadioButtonOption'
import clickContinue from "./clickContinue"

/**
 * Selects a radio button option and clicks the Continue button
 * 
 * @param {any} selectedOption The display text of the radio option to select
 */
module.exports = (selectedOption) => {
   selectRadioButtonOption(selectedOption)
   clickContinue()
}
