"use strict";

var checkElementExists = require('./checkElementExists');

module.exports = function (message) {
  checkElementExists("//div[@class=\"govuk-form-group govuk-form-group--error\"]/fieldset/span[@class=\"govuk-error-message\"][contains(., \"".concat(message, "\")]"));
};