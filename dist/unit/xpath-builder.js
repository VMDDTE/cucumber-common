"use strict";

var tap = require('tap');

var _require$string = require('../..').string,
    elementExtractor = _require$string.elementExtractor,
    xPathBuilder = _require$string.xPathBuilder,
    xPathWithText = _require$string.xPathWithText;
/**
 * Check xPathBuilder returns the expected nodes
 */


tap.equal(xPathBuilder('testing-node'), '//*[self::a or self::p or self::h1]');
/**
 * Check xPathBuilder returns the expected nodes
 */

tap.equal(xPathWithText('testing-node', 'life finds a way'), '//*[self::a or self::p or self::h1 and normalize-space()="life finds a way"]');
/**
 * Check that elementExtractor array contains expected values
 */

tap.deepEqual(elementExtractor('testing-node'), ["a", "p", "h1"]);