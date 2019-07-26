"use strict";

var _tap = _interopRequireDefault(require("tap"));

var _organisationEngine = _interopRequireDefault(require("../../test-asset-generator/engines/organisation-engine"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var organisation = (0, _organisationEngine["default"])('Raptors and Reptiles');
/**
 * Check Organisation info
 */

_tap["default"].equal(organisation.Name, 'Raptors and Reptiles');

_tap["default"].equal(organisation.Email, 'regaffairs@randrplc.co.uk');

_tap["default"].equal(organisation.OrganisationReference, '10347');
/**
 * Check Authorisations
 */


_tap["default"].equal(organisation.MarketingAuthorisations.length, 3);

_tap["default"].equal(organisation.MarketingAuthorisations[0].MarketingAuthorisationNumber, '10347/4036');

_tap["default"].equal(organisation.MarketingAuthorisations[1].MarketingAuthorisationNumber, '10347/4037');

_tap["default"].equal(organisation.MarketingAuthorisations[2].MarketingAuthorisationNumber, '10347/4021');