const clickElement = require('./clickElement')

module.exports = (element, filepath) => {
    browser.chooseFile(element, filepath)
}