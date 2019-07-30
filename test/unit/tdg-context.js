const tap = require('tap')
const generator = require('data-generator')
const Context = require('../../lib/tdg/context')

tap.beforeEach((done, t) => {
    generator.clearAll()
    done()
})

/**
 * Load the 'Robert' context:
 */
tap.test('robert', async t => {
    const context = new Context('robert')

    await context.load()

    const testuser = context.testUser

    t.ok(testuser)
    t.ok(testuser.Email)
    t.match(testuser.Email, /^robert.price@rnr.com$/)

    await context.destroy()
})
