/**
 * Click on the change link on a summary page
 *
 * @param  {String}   linkId  The id of the link to click
 */
module.exports = (linkId) => {
    const element = `//a[@class="govuk-link"]/span[@class="govuk-visually-hidden"][contains(.,"${linkId}")]/ancestor::a`
    const link = browser.elements(element).value[0]
    link.click()
}
