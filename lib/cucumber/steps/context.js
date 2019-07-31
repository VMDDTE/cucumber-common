const path = require('path')
const assert = require('assert')

const Context = require('../../tdg/context')

const { defineStep: Step } = require('cucumber')

Step('the {string} context', async function (name) {
    const context = new Context(name)

    await context.load()

    this.context = context
})

/**
 * Check whether the currently loaded context has a test
 * user, with a specified email address:
 */
Step('testUser has email of {string}', function (email) {
    assert.ok(this.context)

    const testUser = this.context.testUser

    assert.ok(testUser)
    assert.equal(testUser.Email, email)
})
