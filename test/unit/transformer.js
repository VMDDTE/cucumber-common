const tap = require('tap')

const transformer = require('../../test-asset-generator/transformers/transformer')

tap.test('Check the persona is being returned', t => {
  const testData = transformer('Test User', 'namespace').persona
  t.equal(testData.FirstName, 'Test')
  t.equal(testData.LastName, 'User')
  t.end()
})

tap.test('Check that an error is thrown if no persona', t => {
  const testData = transformer('No User', 'namespace').persona
  t.equal(testData.message, `'No User' doesn't exist`)
  t.end()
})


