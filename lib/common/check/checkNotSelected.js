/**
 * Check the given element is NOT selected
 * @param  {String}   element   Element selector
 */
module.exports = (element) => {
  /**
       * The selected state
       * @type {Boolean}
       */
  const isSelected = browser.isSelected(element)

  expect(isSelected).to.not
    .equal(true, `"${element}" should not be selected`)
}
