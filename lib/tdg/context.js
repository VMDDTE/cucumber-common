const generator = require('data-generator')

const contexts = new Set()

class Context {
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

module.exports = {
    create: name => {
        const context = new Context(name)

        contexts.add(context)
        return context
    },

    unload: () => {
        for (context in contexts) {
            context.destroy()
        }
        contexts.clear()
    }
}
