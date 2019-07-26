"use strict";

var personae = require('../../assets/personae');
/**
 * Loops through personas file and returns an array of concatenated
 * first and last names
 */


var getAllNames = function getAllNames() {
  return personae.map(function (p) {
    return "".concat(p.givenName, " ").concat(p.familyName);
  });
};

module.exports = getAllNames;