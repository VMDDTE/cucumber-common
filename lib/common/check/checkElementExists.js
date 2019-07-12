const checkIfElementExists = require('./checkIfElementExists')
const waitForVisible = require('../action/waitForVisible')

/**
 * Check if the given element exists
 * @param  {String}   elem       Element selector
 */
module.exports = (elem) => {
    waitForVisible(elem)
    checkIfElementExists(elem, false)
}
