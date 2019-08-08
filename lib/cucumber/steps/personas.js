const Step = require('cucumber').defineStep
const transformer = require('../../../test-asset-generator/transformers/transformer')


Step(/^I am (.*)$/, function (actor) {
  const person = transformer(actor, 'namespace')
  this.scene = {
    person
  }
})

Step(/^I see the persona$/, function () {
  console.table(this.scene.person)
})