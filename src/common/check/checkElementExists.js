import checkIfElementExists from '../lib/checkIfElementExists'

/**
 * Check if the given element exists
 * @param  {String}   elem       Element selector
 */
module.exports = (elem) => {
  checkIfElementExists(elem, false)
}
