//const tap = require('tap')
import tap from 'tap'
const personaGetter = require('../../test-asset-generator/engines/persona-engine')

const user = personaGetter('Test User')

/**
 * Check that the persona has all the expected details
 */
tap.equal(user.FirstName, 'Test')
tap.equal(user.LastName, 'User')
tap.equal(user.Gender, 'male')
tap.equal(user.BirthDate, '18/01/1986')
tap.equal(user.JobTitle, 'Regulatory Affairs Manager')
tap.equal(user.RcvsNo, '0000000')
tap.equal(user.Roles[0].name, 'Venture Pharmaceuticals Limited')

/**
 * Check that the email data is namespaced with a timestamp
 */

 tap.match(user.Email, /[0-9]{10}-em@il.me/)


/**
 * Check to ensure that a poorly cased and spaced name normalises and still returns a good result
 */

const wonkyuser = personaGetter('  tEst    USeR   ')
tap.equal(wonkyuser.FirstName, 'Test')
tap.equal(wonkyuser.LastName, 'User')

/**
 * Check to ensure that a non-existant user throws a useful error
 */

const baduser = personaGetter('Ellie Sadler')

tap.equal(baduser.message, '\'Ellie Sadler\' doesn\'t exist')