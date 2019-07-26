"use strict";

var assert = require('assert');

var path = require('path');

var uut = require('../..');

describe('checkInURLPath()', function () {
  var fileName = path.join('file:///', __dirname, '../fixtures/simple.html');
  browser.url(fileName);
  it('match part of URL', function () {
    assert.doesNotThrow(function () {
      return uut.checkInURLPath('/fixtures');
    });
  });
  it('match part of URL, crossing steps', function () {
    assert.doesNotThrow(function () {
      return uut.checkInURLPath('/fixtures/simple');
    });
  });
  it('throw if does not match part of URL', function () {
    assert["throws"](function () {
      return uut.checkInURLPath('segment_that_is_not_in_the_url');
    });
  });
});