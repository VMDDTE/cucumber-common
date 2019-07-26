"use strict";

var toKebabCase = require('./to-kebab-case'); //import toKebabCase from './to-kebab-case'


var toDataHook = require('./to-data-hook');

var _require = require('./xpath-builder'),
    elementExtractor = _require.elementExtractor,
    xPathBuilder = _require.xPathBuilder,
    xPathWithText = _require.xPathWithText;

var PageMapper = require('./page-mapper');

module.exports = {
  toDataHook: toDataHook,
  elementExtractor: elementExtractor,
  xPathBuilder: xPathBuilder,
  xPathWithText: xPathWithText,
  PageMapper: PageMapper,
  toKebabCase: toKebabCase
};