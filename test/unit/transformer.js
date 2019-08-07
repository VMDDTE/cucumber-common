const tap = require('tap')

const transformer = require('../../test-asset-generator/transformers/transformer')

tap.test('Check the persona is being returned', t => {
  const testData = transformer('Robert Price', 'namespace')
  console.dir(testData)
  t.equal(testData[2].data.name, 'Robert Price')
  t.equal(testData[2].data.email, '{usergen}')
  t.equal(testData[2].action, 'create')
  t.equal(testData[2].label, 'ExternalUserRecord0')
  t.end()
})

tap.test('Check that an error is thrown if no persona', t => {
  const testData = transformer('No User', 'namespace').persona
  t.equal(testData.message, `'No User' doesn't exist`)
  t.end()
})
