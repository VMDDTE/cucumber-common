const generator = require('data-generator')

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

module.exports = Scenario
