"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var tap = require('tap');

var cc = require('../..');
/**
 * These are the common functions inherited from cucumber-boilerplate:
 */


var common = ['checkClass', 'checkContainsAnyText', 'checkContainsText', 'checkCookieContent', 'checkCookieExists', 'checkDimension', 'checkElementExists', 'checkElementNotExists', 'checkEqualsText', 'checkErrorMessage', 'checkFocus', 'checkFontProperty', 'checkIfElementExists', 'checkIsEmpty', 'checkIsOpenedInNewWindow', 'checkModal', 'checkModalText', 'checkNewWindow', 'checkNotSelected', 'checkOffset', 'checkSelected', 'checkProperty', 'checkTitle', 'checkTitleContains', 'checkURL', 'checkURLPath', 'checkWithinViewport', 'clearInputField', 'clickElement', 'closeAllButFirstTab', 'closeLastOpenedWindow', 'compareText', 'deleteCookie', 'dragElement', 'focusLastOpenedWindow', 'handleModal', 'isEnabled', 'isExisting', 'isVisible', 'moveToElement', 'openWebsite', 'pause', 'pressButton', 'removeElement', 'resizeScreenSize', 'scroll', 'selectOption', 'selectOptionByIndex', 'setCookie', 'setInputField', 'setPromptText', 'submitForm', 'waitFor', 'waitForVisible'];
/**
 * These are the functions that have been overridden:
 */

var overriden = ['breakHyperlink', 'checkErrorMessageExists', 'checkInURLPath', 'checkInputFieldExists', 'checkListOfRadioOptionsContainingText', 'checkNumberOfErrorMessages', 'checkPageNotFound', 'checkRadioButtonOptionDoesNotExist', 'checkRadioButtonOptionExists', 'checkSummaryListItemLinkExists', 'checkTheUserCannotContinue', 'checkYourReferencePanelExists', 'clickButton', 'clickChangeLink', 'clickContinue', 'clickHyperlink', 'selectNumberOfCheckBoxes', 'selectRadioButtonOption', 'selectRadioButtonOptionAndClickContinue', 'setInputFieldValue', 'setInputViaDataHook', 'setVetAndPracticeRegistrationState']
/**
 * Also check that the exact function names are present:
 */
;
[].concat(common, overriden).map(function (fnName) {
  tap.equal(_typeof(cc[fnName]), 'function', "".concat(fnName, ": is not present"));
});