const Step = require('cucumber').defineStep
const { xPathWithDataHook, xPathWithDataHookAndText } = require('../../string/xpath-builder')
const toDataHook = require('../../string/to-data-hook')
const cc = require('../../../')

Step(/^I see (?:the|a(?:n)?) (.*) (.*)$/, (element, type) => cc.waitForVisible(xPathWithDataHook(`${type}-node`, toDataHook(element))))
Step(/^(?:the|a(?:n)?) (.*) (.*) exists$/, (element, type) => cc.checkElementExists(xPathWithDataHook(`${type}-node`, toDataHook(element))))
Step(/^(?:the|a(?:n)?) (.*) (.*) (?:doesn't|does not)+ exist$/, (element, type) => cc.checkElementNotExists(xPathWithDataHook(`${type}-node`, toDataHook(element))))
Step(/^I see (?:the|a(?:n)?) (.*) (.*) with the text "(.*)?"$/, (element, type, text) => cc.checkContainsText(xPathWithDataHookAndText(`${type}-node`, element, text)))