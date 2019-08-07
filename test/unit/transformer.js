const tap = require('tap')

const transformer = require('../../test-asset-generator/transformers/transformer')

tap.test('Check the persona is being returned', t => {
  const testData = transformer('Robert Price', 'namespace')
  t.equal(testData[2].data.name, 'Robert Price')
  t.equal(testData[2].data.email, '{usergen}')
  t.equal(testData[2].action, 'create')
  t.equal(testData[2].label, 'ExternalUserRecord0')
  t.end()
})

tap.test('Check that an error is thrown if no persona', t => {
  t.throws(transformer('No User', 'namespace'), new Error('No assets have been provided'), 'Should throw error')
  t.end()
})
