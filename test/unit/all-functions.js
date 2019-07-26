const tap = require('tap')
const cc = require('../..')

/**
 * These are the common functions inherited from cucumber-boilerplate:
 */
const common = [
    'checkClass',
    'checkContainsAnyText',
    'checkContainsText',
    'checkCookieContent',
    'checkCookieExists',
    'checkDimension',
    'checkElementExists',
    'checkElementNotExists',
    'checkEqualsText',
    'checkErrorMessage',
    'checkFocus',
    'checkFontProperty',
    'checkIfElementExists',
    'checkIsEmpty',
    'checkIsOpenedInNewWindow',
    'checkModal',
    'checkModalText',
    'checkNewWindow',
    'checkNotSelected',
    'checkOffset',
    'checkSelected',
    'checkProperty',
    'checkTitle',
    'checkTitleContains',
    'checkURL',
    'checkURLPath',
    'checkWithinViewport',
    'clearInputField',
    'clickElement',
    'closeAllButFirstTab',
    'closeLastOpenedWindow',
    'compareText',
    'deleteCookie',
    'dragElement',
    'focusLastOpenedWindow',
    'handleModal',
    'isEnabled',
    'isExisting',
    'isVisible',
    'moveToElement',
    'openWebsite',
    'pause',
    'pressButton',
    'removeElement',
    'resizeScreenSize',
    'scroll',
    'selectOption',
    'selectOptionByIndex',
    'setCookie',
    'setInputField',
    'setPromptText',
    'submitForm',
    'waitFor',
    'waitForVisible'
]

/**
 * These are the functions that have been overridden:
 */
const overriden = [
    'breakHyperlink',
    'checkErrorMessageExists',
    'checkInURLPath',
    'checkInputFieldExists',
    'checkListOfRadioOptionsContainingText',
    'checkNumberOfErrorMessages',
    'checkPageNotFound',
    'checkRadioButtonOptionDoesNotExist',
    'checkRadioButtonOptionExists',
    'checkSummaryListItemLinkExists',
    'checkTheUserCannotContinue',
    'checkYourReferencePanelExists',
    'clickButton',
    'clickChangeLink',
    'clickContinue',
    'clickHyperlink',
    'selectNumberOfCheckBoxes',
    'selectRadioButtonOption',
    'selectRadioButtonOptionAndClickContinue',
    'setInputFieldValue',
    'setInputViaDataHook',
    'setVetAndPracticeRegistrationState'
]

/**
 * Also check that the exact function names are present:
 */
;[...common, ...overriden].map(fnName => {
    tap.equal(typeof cc[fnName], 'function', `${fnName}: is not present`)
})
