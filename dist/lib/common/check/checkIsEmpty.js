"use strict";

var checkContainsAnyText = require('./checkContainsAnyText');

module.exports = function (elementType, element, falseCase) {
  var newFalseCase = true;

  if (typeof falseCase === 'function') {
    newFalseCase = false;
  } else if (falseCase === ' not') {
    newFalseCase = false;
  }

  checkContainsAnyText(elementType, element, newFalseCase);
};