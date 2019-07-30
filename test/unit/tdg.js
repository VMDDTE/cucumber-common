const tap = require('tap')
const generator = require('data-generator')

const main = async () => {
    let dataKey = 'rnr'

    /**
     * Clear the test data:
     */
    generator.clearAll()

    /**
     * Load the R&R file:
     */
    await generator.generate(dataKey)

    /**
     * Check that there is a user, and that the email address
     * has the correct format:
     */
    let testuser = await generator.getTestUser(dataKey)

    tap.ok(testuser)
    tap.ok(testuser.Email)
    tap.match(testuser.Email, /\d{10}.vmd.vet.test@gmail.com$/)

    /**
     * Tear down properly:
     */
    await generator.tearDown(dataKey)

    /**
     * Now test Mary:
     */
    dataKey = 'mary'

    generator.clearAll()
    await generator.generate(dataKey)
    testuser = await generator.getTestUser(dataKey)

    tap.ok(testuser)
    tap.ok(testuser.Email)
    tap.match(testuser.Email, /^em@il.me$/)

    await generator.tearDown(dataKey)
}

main()
