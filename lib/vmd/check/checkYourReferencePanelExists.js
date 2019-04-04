const checkElementExists = require ('../../common/check/checkElementExists')

/**
 * Check if the <div> is present which contains the certificate application reference number
 *
 */
module.exports = () => {
   checkElementExists("//div[@class='govuk-panel__body'][@data-hook='application-reference']")
}
