const checkElementExists = require('./checkElementExists')

module.exports = (message) => {
    checkElementExists(`//div[@class="govuk-form-group govuk-form-group--error"]/fieldset/span[@class="govuk-error-message"][contains(., "${message}")]`)
}
