const personae = require('../../assets/personae')
const short = require('short-uuid')

class Actor {
  constructor (name) {
    this.user = this.getPersona(name)
  }
  
  /**
   * Takes a name string, breaks it into first and last name and then 
   * searches the JSON to return the correct persona
   * @param {String} name 
   */
  
  getPersona (name) {
    const normalisedName = name.toLowerCase().replace(/\s+/g,' ').trim().split(' ')
    const firstName = normalisedName[0]
    const lastName = normalisedName[1]
    const thePersona = personae.find(p => p.givenName.toLowerCase() === firstName && p.familyName.toLowerCase() === lastName)
    return (thePersona) 
    ? {
      FirstName: thePersona.givenName,
      LastName: thePersona.familyName,
      Name: `${thePersona.givenName} ${thePersona.familyName}`,
      Gender: thePersona.gender,
      BirthDate: thePersona.birthDate,
      JobTitle: thePersona.jobTitle,
      RcvsNo: thePersona.RCVSNo,
      Roles: thePersona.worksFor,
      Email: `${short.generate()}-${thePersona.email}`
    }
    : new Error(`'${name}' doesn\'t exist`)
  }
  
}

/**
 * personaGetter is a small factory function to give us control over the use of the
 * Actor class. This also allows us to step straight into the 'user'
 * object, meaning the end users don't need to instantiate a class instance
 * each time they want a user.
 *
 * @param {String} name: 
 */
const personaGetter = (name) => new Actor(name).user

module.exports = personaGetter

