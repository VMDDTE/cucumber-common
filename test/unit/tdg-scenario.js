const tap = require('tap')
const generator = require('data-generator')

tap.beforeEach((done, t) => {
    generator.clearAll()
    done()
})

class Scenario {
    constructor (name) {
        this.name = name
    }

    async load () {
        await generator.generate(this.name)

        this.testUser = await generator.getTestUser(this.name)
    }

    destroy () {
        return generator.tearDown(this.name)
    }
}

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
