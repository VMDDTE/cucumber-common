"use strict";

var Step = require('cucumber').defineStep;

var _require = require('../../string/xpath-builder'),
    xPathWithDataHook = _require.xPathWithDataHook,
    xPathWithDataHookAndText = _require.xPathWithDataHookAndText;

var toDataHook = require('../../string/to-data-hook');

var cc = require('../../../');

Step(/^I see (?:the|a(?:n)?) (.*) (.*)$/, function (element, type) {
  return cc.waitForVisible(xPathWithDataHook("".concat(type, "-node"), toDataHook(element)));
});
Step(/^(?:the|a(?:n)?) (.*) (.*) exists$/, function (element, type) {
  return cc.checkElementExists(xPathWithDataHook("".concat(type, "-node"), toDataHook(element)));
});
Step(/^(?:the|a(?:n)?) (.*) (.*) (?:doesn't|does not)+ exist$/, function (element, type) {
  return cc.checkElementNotExists(xPathWithDataHook("".concat(type, "-node"), toDataHook(element)));
});
Step(/^I see (?:the|a(?:n)?) (.*) (.*) with the text "(.*)?"$/, function (element, type, text) {
  return cc.checkContainsText(xPathWithDataHookAndText("".concat(type, "-node"), element, text));
});