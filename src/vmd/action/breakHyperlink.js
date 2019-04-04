/**
 * Break the hyperlink so that it returns 404-Not Found
 *
 * @param {any} hyperlinkText
 */
module.exports = (hyperlinkText) => {
  const brokenLink = `${browser.url().value}/broken`
  const selector = `//a[@data-hook="${hyperlinkText}"]`

  browser.execute(function (selector, brokenLink) {
    var element = document.evaluate(selector, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
    element.setAttribute('href', brokenLink)
  }, selector, brokenLink)

}
