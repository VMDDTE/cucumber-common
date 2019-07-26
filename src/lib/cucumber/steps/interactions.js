const Step = require('cucumber').defineStep
const { xPathWithDataHook } = require('../../string/xpath-builder')
const toDataHook = require('../../string/to-data-hook')
const cc = require('../../..')

Step(/^I click (?:on)? (?:the|a(?:n)?) (.*) (.*)$/, (element, type) => 
  cc.clickElement('click', 'selector', xPathWithDataHook(`${type}-node`, toDataHook(element)))
)