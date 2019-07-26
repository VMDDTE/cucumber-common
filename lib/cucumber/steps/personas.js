const Step = require('cucumber').defineStep
const personaGetter = require('../../../test-asset-generator/persona-engine')


Step(/^I am logged in as (.*)$/, actor => {
  console.log(personaGetter(actor))
})

Step(/^I see the persona$/, () => true)