"use strict";

var _require = require('../../../common/action'),
    waitForVisible = _require.waitForVisible,
    setInputField = _require.setInputField,
    clickElement = _require.clickElement;

module.exports = function (username, password) {
  waitForVisible('//*[@id="signInName"]');
  waitForVisible('//*[@id="password"]');
  waitForVisible('//*[@id="next"]');
  setInputField('set', username, '#signInName'); // Username

  setInputField('set', password, '#password'); // Password

  clickElement('click', 'selector', '//button[@id="next"]');
};