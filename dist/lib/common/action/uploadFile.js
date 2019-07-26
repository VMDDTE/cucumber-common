"use strict";

var clickElement = require('./clickElement');

module.exports = function (element, filepath) {
  browser.chooseFile(element, filepath);
};