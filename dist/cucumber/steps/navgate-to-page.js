"use strict";

var Step = require('cucumber').defineStep;

var _require = require('../../vmd'),
    getApplicationPageURL = _require.getApplicationPageURL;

Step(/^I am on the (.*) page$/, function (page) {
  return browser.url(getApplicationPageURL(process.env, page));
});