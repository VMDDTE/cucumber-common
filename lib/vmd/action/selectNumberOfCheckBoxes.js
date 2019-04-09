
/**
 * Perform an click action on the given element
 * @param  {number}   numberOfBoxesToTick  The number of boxes to select on the page
 */
module.exports = (numberOfBoxesToTick) => {
    const selector = `//input[@data-hook='check-box']`
    const checkBoxes = browser.elements(selector).value

    for (var index = 0; index < numberOfBoxesToTick; index++) {
        checkBoxes[index].click()
    }
}
