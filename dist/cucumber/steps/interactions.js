"use strict";

var Step = require('cucumber').defineStep;

var _require = require('../../string/xpath-builder'),
    xPathWithDataHook = _require.xPathWithDataHook;

var toDataHook = require('../../string/to-data-hook');

var cc = require('../../..');

Step(/^I click (?:on)? (?:the|a(?:n)?) (.*) (.*)$/, function (element, type) {
  return cc.clickElement('click', 'selector', xPathWithDataHook("".concat(type, "-node"), toDataHook(element)));
});