const elements = require('../json/elements.json')

/**
 * Extracts a list of valid elements from the elements json file
 *
 * @param {string} elementType The type of element to look for (e.g. 'header')
 */
const elementExtractor = (elementType) => {
  const array = elements
    .find(f => f.name === elementType.toLowerCase())
    
    // Check that the array has been populated
    if (!array) throw new Error(`'${elementType}' is not a valid element type`)
    // Check that the `elements` object contains an array
    if (!Array.isArray(array.elements)) throw new Error(`The elements object for '${elementType}' must be an array`)
    return array.elements
}

/**
 * Builds an XPath from a filtered list of elements
 *
 * @param {string} elementType The type of element to look for (e.g. 'header')
 */

const xPathBuilder = (elementType) => {
  try {
    const array = elementExtractor(elementType)
      .map(el => `self::${el}`)
      .join(' or ')
    return `//*[${array}]`
  }
  catch (e) {
    return console.error(e)
  }
}

const xWithText =(thing, text) =>
  thing.replace(']', ` and normalize-space()="${text}"]`)

/**
 * Builds an XPath using xPathBuilder with a string at the end
 *
 * @param {string} elementType The type of element to look for (e.g. 'header')
 * @param {string} text the content of the element
 */

 const xPathWithText = (elementType, text) => xWithText(xPathBuilder(elementType), text)
    

const xPathWithDataHook = (elementType, dataHook) => {
  const xpath = xPathBuilder(elementType)
  let mutatedXpath = ''
  if(xpath.match(/ or/gm)) {
    mutatedXpath = xpath
    .replace(/ or/gm, `[contains(@data-hook, "${dataHook}")] or`)
    .replace(/\]\]/, `][contains(@data-hook, "${dataHook}")]]`)
  } else {
    mutatedXpath = xpath.replace(/\]/, `[contains(@data-hook, "${dataHook}")]]`)
  }
  return mutatedXpath
}

const xPathWithDataHookAndText = (elementType, dataHook, text) => 
  xWithText(xPathWithDataHook(elementType, dataHook), text)

module.exports = {
  elementExtractor,
  xPathBuilder,
  xPathWithText,
  xPathWithDataHook,
  xPathWithDataHookAndText,
}