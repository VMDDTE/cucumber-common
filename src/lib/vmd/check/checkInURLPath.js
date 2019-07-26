/**
 * Check if the given string is part of the URL
 *
 * @param  {String}     expectedUrlPart   The string to check for
 * @param  {boolean}    falseCase         Whether to check if the given string is in the URL path or not
 */
module.exports = (expectedUrlPart, falseCase = false) => {
    /**
      * The URL of the current browser window
      * @type {String}
      */
    const currentUrl = browser.url().value

    if (falseCase) {
        expect(currentUrl).to.not
            .contain(
                expectedUrlPart,
                `Expected URL "${currentUrl}" to not contain "${expectedUrlPart}"`
            )
    } else {
        expect(currentUrl).to
            .contain(
                expectedUrlPart,
                `Expected URL "${currentUrl}" to contain "${expectedUrlPart}"`
            )
    }
}
