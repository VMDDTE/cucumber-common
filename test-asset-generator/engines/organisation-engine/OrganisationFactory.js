import organisations  from '../../assets/organisations'
const { toKebabCase } = require('../../../lib/string')

class OrganisationFactory {
    /**
     * Creates a stripped back data model from business description
     * found in assets/organisations/org-name-folder/organisation.json
     * 
     * @param {json} organisation asset organisation schema
     */
    constructor({ companyNumber, email, name }) {
        this.Name = name
        this.Email = email
        this.OrganisationReference = companyNumber
        this.MarketingAuthorisations = getMarketingAuthorisationsByOrganisation(name)
    }
}

const getInstance = organisationRecord => new OrganisationFactory(organisationRecord)
 
const findOrganisationRecord = name => organisations.find(org => org.name === name)

const getMarketingAuthorisationsByOrganisation = name => {
    try {
        return require(`../../assets/organisations/${toKebabCase(name)}/marketing-authorisations`)
    }
    catch {
        return []
    }
}

export default (name) => getInstance(findOrganisationRecord(name))
