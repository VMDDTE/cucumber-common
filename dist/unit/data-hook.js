"use strict";

var tap = require('tap');

var toDataHook = require('../..').string.toDataHook;
/**
 * Check a simple conversion:
 */


tap.equal(toDataHook('Check My Answers'), 'check_my_answers');
/**
 * Check that upper and lower case are not issues:
 */

tap.equal(toDataHook('CheCk my ansWERS'), 'check_my_answers');