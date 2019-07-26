"use strict";

var _require = require('cucumber'),
    Given = _require.Given;

var runLoginPage = require('./run-login-page');

Given(/^the public user is logged in$/, function () {
  browser.deleteCookie();
  var testuser = this.parameters.testuser ? this.parameters.testuser : null;
  browser.pause(500); // Attempt to nullify Azure B2C race condition until new test framework

  browser.url("".concat(process.env.APPLICATION_DOMAIN_URL, "/login/out?forceLogin=yes"));

  if (testuser) {
    runLoginPage(testuser.Email, testuser.Password);
  } else {
    runLoginPage(process.env.B2C_USERNAME, process.env.B2C_PASSWORD);
  }
});
Given(/^the public user is logged in to '([^']*)?'$/, function (organisation) {//to be implemented
});
Given(/^the public user is logged in to '([^']*)?' as '([^']*)?'$/, function (organisation, role) {//to be implemented
});