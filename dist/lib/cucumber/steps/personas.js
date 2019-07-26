"use strict";

var Step = require('cucumber').defineStep;

var personaGetter = require('../../../test-asset-generator/persona-engine');

Step(/^I am logged in as (.*)$/, function (actor) {
  console.log(personaGetter(actor));
});
Step(/^I see the persona$/, function () {
  return true;
});