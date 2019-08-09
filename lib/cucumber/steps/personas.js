const Step = require('cucumber').defineStep
const sceneEngine = require('../../../test-asset-generator/engines/scene-engine')
const testDataLoader = require('../../../test-asset-generator/test-data-loader')

Step(/^I am (.*)$/, function (actor) {
  this.scene = sceneEngine(actor)
  testDataLoader(actor)
})

Step(/^I see the scene in the console$/, function () {
  console.dir(this.scene)
})