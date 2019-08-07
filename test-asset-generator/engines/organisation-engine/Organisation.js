const organisations = require('../../assets/organisations')
const { toKebabCase } = require('../../../lib/string')

class Organisation {
    /**
     * Creates a stripped back data model from business description
     * found in assets/organisations/org-name-folder/organisation.json
     * 
     * @param {json} organisation asset organisation schema
     */
    constructor({ companyNumber, email, name, organisationType }) {
        this.Name = name
        this.Email = email
        this.OrganisationReference = companyNumber
        this.OrganisationType = organisationType
        this.MarketingAuthorisations = getMarketingAuthorisationsByOrganisation(name)
    }
}

const getInstance = organisationRecord => new Organisation(organisationRecord)
 
const findOrganisationRecord = name => organisations.find(org => org.name === name)

const getMarketingAuthorisationsByOrganisation = name => {
    try {
        return require(`../../assets/organisations/${toKebabCase(name)}/marketing-authorisations`)
    }
    catch {
        return []
    }
}

module.exports = (name) => getInstance(findOrganisationRecord(name))
