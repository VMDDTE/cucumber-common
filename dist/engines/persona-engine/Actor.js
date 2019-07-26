"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var personae = require('../../assets/personae'); //import personae from '../../assets/personae'


var timestamp = Math.floor(Date.now() / 1000);

var Actor =
/*#__PURE__*/
function () {
  function Actor(name) {
    _classCallCheck(this, Actor);

    this.user = this.getPersona(name);
  }
  /**
   * Takes a name string, breaks it into first and last name and then 
   * searches the JSON to return the correct persona
   * @param {String} name 
   */


  _createClass(Actor, [{
    key: "getPersona",
    value: function getPersona(name) {
      var normalisedName = name.toLowerCase().replace(/\s+/g, ' ').trim().split(' ');
      var firstName = normalisedName[0];
      var lastName = normalisedName[1];
      var thePersona = personae.find(function (p) {
        return p.givenName.toLowerCase() === firstName && p.familyName.toLowerCase() === lastName;
      });
      return thePersona ? {
        FirstName: thePersona.givenName,
        LastName: thePersona.familyName,
        Gender: thePersona.gender,
        BirthDate: thePersona.birthDate,
        JobTitle: thePersona.jobTitle,
        RcvsNo: thePersona.RCVSNo,
        Roles: thePersona.worksFor,
        Email: "".concat(timestamp, "-").concat(thePersona.email),
        Name: "".concat(thePersona.givenName, " ").concat(thePersona.familyName)
      } : new Error("'".concat(name, "' doesn't exist"));
    }
  }]);

  return Actor;
}();
/**
 * personaGetter is a small factory function to give us control over the use of the
 * Actor class. This also allows us to step straight into the 'user'
 * object, meaning the end users don't need to instantiate a class instance
 * each time they want a user.
 *
 * @param {String} name: 
 */


var personaGetter = function personaGetter(name) {
  return new Actor(name).user;
};

module.exports = personaGetter;