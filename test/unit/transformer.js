const tap = require('tap')

const transformer = require('../../test-asset-generator/transformers/transformer')

const testUser = transformer('Robert Price', 'namespace')


tap.test('Check the persona is being returned', t => {
  t.equal(testUser[2].data.name, 'Robert Price')
  t.equal(testUser[2].data.email, '{usergen}')
  t.equal(testUser[2].action, 'create')
  t.equal(testUser[2].label, 'ExternalUserRecord0')
  t.end()
})

tap.test('Check that an error is thrown if no persona', t => {
  t.throws(() => transformer('No User', 'namespace'), new Error('No assets have been provided'), 'Should throw error')
  t.end()
})
