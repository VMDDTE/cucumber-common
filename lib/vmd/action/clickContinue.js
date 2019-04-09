const clickElement = require('../../common/action/clickElement')

/**
 * Click on the Continue button
 *
 */
module.exports = () => {
    clickElement('click', 'selector', '//*[@data-hook="continue-button"]')
}
