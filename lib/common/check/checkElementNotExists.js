const checkIfElementExists = require('./checkIfElementExists')

/**
 * Check if the given element does not exist
 * @param  {String}   elem       Element selector
 */
module.exports = (elem) => {
    checkIfElementExists(elem, true)
}
