const tap = require('tap')
const { elementExtractor, xPathBuilder, xPathWithText } = require('../..').string

/**
 * Check xPathBuilder returns the expected nodes
 */
tap.equal(xPathBuilder('testing-node'), '//*[self::a or self::p or self::h1]')

/**
 * Check xPathBuilder returns the expected nodes
 */
tap.equal(xPathWithText('testing-node', 'life finds a way'), '//*[self::a or self::p or self::h1 and normalize-space()="life finds a way"]')

/**
 * Check that elementExtractor array contains expected values
 */
tap.deepEqual(elementExtractor('testing-node'), ["a", "p", "h1"])

