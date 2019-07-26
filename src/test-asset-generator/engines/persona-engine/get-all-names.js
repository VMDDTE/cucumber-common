const personae = require('../../assets/personae')

/**
 * Loops through personas file and returns an array of concatenated
 * first and last names
 */

const getAllNames = () => personae.map(p => `${p.givenName} ${p.familyName}`)

module.exports = getAllNames