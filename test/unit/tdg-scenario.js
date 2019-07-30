const tap = require('tap')
const generator = require('data-generator')
const Scenario = require('../../lib/tdg/scenario')

tap.beforeEach((done, t) => {
    generator.clearAll()
    done()
})

/**
 * Load the 'Robert' scenario:
 */
tap.test('robert', async t => {
    const scenario = new Scenario('robert')

    await scenario.load()

    const testuser = scenario.testUser

    t.ok(testuser)
    t.ok(testuser.Email)
    t.match(testuser.Email, /^robert.price@rnr.com$/)

    await scenario.destroy()
})
