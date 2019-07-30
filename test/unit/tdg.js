const tap = require('tap')
const generator = require('data-generator')

const main = async () => {
    /**
     * Clear the test data:
     */
    generator.clearAll()

    /**
     * Load the R&R file:
     */
    await generator.generate('rnr')

    /**
     * Check that there is a user, and that the email address
     * has the correct format:
     */
    const testuser = await generator.getTestUser('rnr')

    tap.ok(testuser)
    tap.ok(testuser.Email)
    tap.match(testuser.Email, /\d{10}.vmd.vet.test@gmail.com$/)

    /**
     * Tear down properly:
     */
    await generator.tearDown('rnr')
}

main()
