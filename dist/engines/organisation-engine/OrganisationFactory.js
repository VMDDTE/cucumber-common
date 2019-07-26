"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _organisations = _interopRequireDefault(require("../../assets/organisations"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _require = require('../../../lib/string'),
    toKebabCase = _require.toKebabCase;

var OrganisationFactory =
/**
 * Creates a stripped back data model from business description
 * found in assets/organisations/org-name-folder/organisation.json
 * 
 * @param {json} organisation asset organisation schema
 */
function OrganisationFactory(_ref) {
  var companyNumber = _ref.companyNumber,
      email = _ref.email,
      name = _ref.name;

  _classCallCheck(this, OrganisationFactory);

  this.Name = name;
  this.Email = email;
  this.OrganisationReference = companyNumber;
  this.MarketingAuthorisations = getMarketingAuthorisationsByOrganisation(name);
};

var getInstance = function getInstance(organisationRecord) {
  return new OrganisationFactory(organisationRecord);
};

var findOrganisationRecord = function findOrganisationRecord(name) {
  return _organisations["default"].find(function (org) {
    return org.name === name;
  });
};

var getMarketingAuthorisationsByOrganisation = function getMarketingAuthorisationsByOrganisation(name) {
  try {
    return require("../../assets/organisations/".concat(toKebabCase(name), "/marketing-authorisations"));
  } catch (_unused) {
    return [];
  }
};

var _default = function _default(name) {
  return getInstance(findOrganisationRecord(name));
};

exports["default"] = _default;