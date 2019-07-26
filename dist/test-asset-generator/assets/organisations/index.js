"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _organisation = _interopRequireDefault(require("./pterodactyl-laboratories/organisation.json"));

var _organisation2 = _interopRequireDefault(require("./raptors-and-reptiles/organisation.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = [_organisation["default"], _organisation2["default"]];
exports["default"] = _default;