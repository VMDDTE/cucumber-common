const toKebabCase = require('./to-kebab-case')
const toDataHook = require('./to-data-hook')
const { elementExtractor, xPathBuilder, xPathWithText } = require('./xpath-builder')
const PageMapper = require('./page-mapper')

module.exports = {
    toDataHook,
    elementExtractor,
    xPathBuilder,
    xPathWithText,
    PageMapper,
    toKebabCase
}