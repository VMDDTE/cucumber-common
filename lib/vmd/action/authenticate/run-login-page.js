const { waitForVisible, setInputField, clickElement } = require('../../../common/action')

module.exports = (username, password) => {
    waitForVisible('//*[@id="signInName"]')
    waitForVisible('//*[@id="password"]')
    waitForVisible('//*[@id="next"]')
    setInputField('set', username, '#signInName') // Username
    setInputField('set', password, '#password') // Password
    clickElement('click', 'selector', '//button[@id="next"]')
}