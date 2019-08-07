import PersonaTransformer from './types/persona';
import PersonaFactory from '../engines/persona-engine'
import OrganisationFactory from '../engines/organisation-engine'
import OrganisationTransformer from './types/organisation';
import RoleTransformer from './types/role';
import MarketingAuthorisationTransformer from './types/marketing-authorisation';
import TDG_CONSTANTS from 'data-generator/common/constants';

const ASSET_TYPES = {
    PERSONA: 'Person',
    ORGANISATION: 'Organization',
    MARKETING_AUTHORISATION: 'MarketingAuthorisation'
};

class Transformer {
    constructor(personaName, namespace) {
        this.persona = PersonaFactory(personaName);
        this.namespace = namespace;
    }
    
    catchEmptyError (asset) {
        throw !asset.length ? new Error('No assets have been provided') : false;
    }

    createTestUser() {
        try {
            const transformedPersona = (new PersonaTransformer(this.persona, this.namespace)).transform();
            return this.addMetaDataToAsset(TDG_CONSTANTS.ACTION_CREATE, transformedPersona, index)
        } catch (err) {
            throw new Error(err)
        }
    }

    createOrganisation(org) {
        try {
            const transformedOrganisation = (new OrganisationTransformer(org, this.namespace)).transform();
            return this.addMetaDataToAsset(TDG_CONSTANTS.ACTION_CREATE, transformedOrganisation, index)
            
        } catch (err) {
            throw new Error(err)
        }
    }
    
    createRole(role) {
        try {
            const transformedRole = (new RoleTransformer(role, this.namespace)).transform()
            return this.addMetaDataToAsset(TDG_CONSTANTS.ACTION_ASSIGN_ROLE, transformedRole, index)
        } catch (err) {
            throw new Error(err)
        }
    }

    createMa(ma) {
        try {
            const transformedMarketingAuthorisation = (new MarketingAuthorisationTransformer(ma, this.namespace).transform());
            return this.addMetaDataToAsset(TDG_CONSTANTS.ACTION_CREATE, transformedMarketingAuthorisation, index)
        } catch (err) {
            throw new Error(err)
        }
    }

    transform() {
        this.catchEmptyError(this.persona)
        const userTDG = this.createTestUser()
        const orgArray = []
        const roleArray = []
        const maArray = []

        testUser.Roles.forEach(({ name, role }, index) => {
            const organisationTDG = OrganisationFactory(name)
            const roleTDG = this.createRole(role)

            orgArray.push(this.createOrganisation(organisationTDG));

            roleTDG.data.users = [userTDG.label]          
            roleArray.push(roleTDG)

            organisation.MarketingAuthorisations.forEach(ma => {
                maArray.push(this.createMa(ma))
            })
        })

        return [testUser, ...orgArray, ...roleArray, ...maArray]

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
const transformer = (personaName, namespace) => new Transformer(assets, namespace)

 module.exports = transformer