const person = require('../persona-engine')
const org = require('../organisation-engine')

class Scene {
  constructor (name) {
    this.person = person(name)
  }

  // Get all of the organisations belonging to a person
  // Extract the data and return an object with the users role appended to it.
  extractOrgs () {
    return this.person.Roles.map(o => {
      const orgObj = JSON.parse(JSON.stringify(org(o.name)))
      orgObj.Role = o.role
      return orgObj
    })
  }
    
  getScene () {
    // Clone the object so we don't mutate the original
    const person = {...this.person}
    // Delete the roles enry as we don't need it anymore
    delete person['Roles']
    return {
      person,
      organisations: this.extractOrgs()
    }
  }
  
}

/**
 * sceneGetter is a small factory function to give us control over the use of the
 * Scene class. This also allows us to step straight into the 'getScene'
 * method which protects the rest of the Class from being manipulated.
 *
 * @param {String} name: 
 */
const sceneGetter = (name) => new Scene(name).getScene()

module.exports = sceneGetter

