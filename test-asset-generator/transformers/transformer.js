const PersonaTransformer = require('./types/persona')
const PersonaFactory = require('../engines/persona-engine')
const OrganisationFactory = require('../engines/organisation-engine')
const OrganisationTransformer = require('./types/organisation')
const RoleTransformer = require('./types/role')
const MarketingAuthorisationTransformer = require('./types/marketing-authorisation')
const TDG_CONSTANTS = require('data-generator/common/constants')

class Transformer {
    constructor(personaName, namespace) {
        this.persona = PersonaFactory(personaName);
        console.log(this.persona)
        this.namespace = namespace;
    }
    
    catchEmptyError (val) {
        throw !val.length ? new Error('No assets have been provided') : false;
    }

    createTestUser() {
        try {
            const transformedPersona = (new PersonaTransformer(this.persona, this.namespace)).transform();
            return this.addMetaDataToAsset(TDG_CONSTANTS.ACTION_CREATE, transformedPersona, 0)
        } catch (err) {
            throw new Error(err)
        }
    }

    createOrganisation(organisation, index) {
        try {
            const transformedOrganisation = (new OrganisationTransformer(organisation, this.namespace)).transform();
            return this.addMetaDataToAsset(TDG_CONSTANTS.ACTION_CREATE, transformedOrganisation, index)
            
        } catch (err) {
            throw new Error(err)
        }
    }
    
    createRole(role, index) {
        try {
            const transformedRole = (new RoleTransformer(role, this.namespace)).transform()
            return this.addMetaDataToAsset(TDG_CONSTANTS.ACTION_ASSIGN_ROLE, transformedRole, index)
        } catch (err) {
            throw new Error(err)
        }
    }

    createMa(ma, index) {
        try {
            const transformedMarketingAuthorisation = (new MarketingAuthorisationTransformer(ma, this.namespace).transform());
            return this.addMetaDataToAsset(TDG_CONSTANTS.ACTION_CREATE, transformedMarketingAuthorisation, index)
        } catch (err) {
            throw new Error(err)
        }
    }

    transform() {
        // this.catchEmptyError(this.persona)
        const userTDG = this.createTestUser(this.persona)
        const orgArray = []
        const roleArray = []
        const maArray = []

        if (!this.persona) {
            return []
        }

        this.persona.Roles.forEach(({ name, role }, roleIndex) => {
            console.log('creating org', name)
            const organisation = OrganisationFactory(name)
            const organisationTDG = this.createOrganisation(organisation, roleIndex)
            const roleTDG = this.createRole(role, roleIndex)

            roleTDG.data.orgId = organisationTDG.label

            orgArray.push(organisationTDG);

            roleTDG.data.users = [userTDG.label]          
            roleArray.push(roleTDG)

            organisation.MarketingAuthorisations.forEach((ma, maIndex) => {
                maArray.push(this.createMa(ma, maIndex))
            })
        })

        return [...orgArray, userTDG, ...roleArray, ...maArray]

    }

    /**
     * Adds extra meta data to the asset object.
     * 
     * @param {string} action 
     * @param {object} asset 
     * @param {integer} index 
     */
    addMetaDataToAsset (action, asset, index) {
        asset.action = action;
        asset.label = `${asset.type}${index}`;

        return asset;
    }
}

/**
 * transformer is a small factory function to give us control over the use of the
 * Transformer class meaning the end users don't need to instantiate a class instance
 * each time.
 *
 * @param {String} personaName: The name of the persona to load
 * @param {String} namespace: The namespace the transformer will run in
 */
const transformer = (personaName, namespace) => new Transformer(personaName, namespace).transform()

 module.exports = transformer