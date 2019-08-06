const Step = require('cucumber').defineStep
const personaGetter = require('../../../test-asset-generator/engines/persona-engine')


Step(/^I am (.*)$/, function (actor) {
  //console.log(personaGetter(actor))
  this.scene = {
    person: actor
  }
})

Step(/^I see the persona$/, function () {
  console.log(this)
})