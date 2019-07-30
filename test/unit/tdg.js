const tap = require('tap')
const generator = require('data-generator')

tap.beforeEach((done, t) => {
    /**
     * Clear the test data:
     */
    generator.clearAll()
    done()
})

tap.test('rnr', async t => {
    const dataKey = 'rnr'

    /**
   * Load the R&R file:
   */
    await generator.generate(dataKey)

    /**
   * Check that there is a user, and that the email address
   * has the correct format:
   */
    const testuser = await generator.getTestUser(dataKey)

    t.ok(testuser)
    t.ok(testuser.Email)
    t.match(testuser.Email, /\d{10}.vmd.vet.test@gmail.com$/)

    /**
   * Tear down properly:
   */
    await generator.tearDown(dataKey)
})

/**
 * Now test Mary:
 */
tap.test('mary', async t => {
    const dataKey = 'mary'

    await generator.generate(dataKey)
    const testuser = await generator.getTestUser(dataKey)

    t.ok(testuser)
    t.ok(testuser.Email)
    t.match(testuser.Email, /^em@il.me$/)

    await generator.tearDown(dataKey)
})

/**
 * Now test Robert:
 */
tap.test('robert', async t => {
    const dataKey = 'robert'

    await generator.generate(dataKey)
    const testuser = await generator.getTestUser(dataKey)

    t.ok(testuser)
    t.ok(testuser.Email)
    t.match(testuser.Email, /^robert.price@rnr.com$/)

    await generator.tearDown(dataKey)
})
