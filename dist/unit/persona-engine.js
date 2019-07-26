"use strict";

var _tap = _interopRequireDefault(require("tap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//const tap = require('tap')
var personaGetter = require('../../test-asset-generator/engines/persona-engine');

var user = personaGetter('Test User');
/**
 * Check that the persona has all the expected details
 */

_tap["default"].equal(user.FirstName, 'Test');

_tap["default"].equal(user.LastName, 'User');

_tap["default"].equal(user.Gender, 'male');

_tap["default"].equal(user.BirthDate, '18/01/1986');

_tap["default"].equal(user.JobTitle, 'Regulatory Affairs Manager');

_tap["default"].equal(user.RcvsNo, '0000000');

_tap["default"].equal(user.Roles[0].name, 'Venture Pharmaceuticals Limited');
/**
 * Check that the email data is namespaced with a timestamp
 */


_tap["default"].match(user.Email, /[0-9]{10}-em@il.me/);
/**
 * Check to ensure that a poorly cased and spaced name normalises and still returns a good result
 */


var wonkyuser = personaGetter('  tEst    USeR   ');

_tap["default"].equal(wonkyuser.FirstName, 'Test');

_tap["default"].equal(wonkyuser.LastName, 'User');
/**
 * Check to ensure that a non-existant user throws a useful error
 */


var baduser = personaGetter('Ellie Sadler');

_tap["default"].equal(baduser.message, '\'Ellie Sadler\' doesn\'t exist');