const PersonaTransformer = require('./types/persona')
const PersonaFactory = require('../engines/persona-engine')
const OrganisationTransformer = require('./types/organisation')
const RoleTransformer = require('./types/role')
const MarketingAuthorisationTransformer = require('./types/marketing-authorisation')
const TDG_CONSTANTS = require('data-generator/common/constants')

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
            const personaTransformer = new PersonaTransformer(this.persona, this.namespace);
            return personaTransformer.transform();
        } catch (err) {
            throw new Error(err)
        }
    }

    createOrganisation(org) {
        try {
            const organisationTransformer = new OrganisationTransformer(org, this.namespace);
            
            return organisationTransformer.transform()
            
        } catch (err) {
            throw new Error(err)
        }
    }
    
    createRole(role) {
        try {
            const roleTransformer = new RoleTransformer(role, this.namespace)
            return roleTransformer.transform()
        } catch (err) {
            throw new Error(err)
        }
    }

    createMa(ma) {
        try {
            const marketingAuthorisationTransformer = new MarketingAuthorisationTransformer(ma, this.namespace);
            return marketingAuthorisationTransformer.transform();
        } catch (err) {
            throw new Error(err)
        }
    }

    transform2() {
        this.catchEmptyError(this.persona)
        const testUser = this.createTestUser()
        const orgArray = []
        const roleArray = []
        const maArray = []

        testUser.Roles.forEach(({ name, role }) => {
            const organisation = OrganisationFactory(name)
            orgArray.push(this.createOrganisation(organisation));
            roleArray.push(this.createRole(role))
            organisation.MarketingAuthorisations.forEach(ma => {
                maArray.push(this.createMa(ma))
            })
        })

        return [testUser, ...orgArray, ...roleArray, ...maArray]

    }

    /**
     * Transform the data from a TAG asset to a TDG asset.
     * Examples of these can be found in the transformers folder;
     *
     * tag-asset.example.json
     * tdg-asset.example-1.json
     * tdg-asset.example-2.json
     */
    transform() {
        if (!this.assets.length) {
            console.info('No assets have been provided');
            return;
        }

        let transformedTDGAssets = []
        let roleTDGAssets = []

        this.assets.forEach((asset, index) => {
            if (!asset['@type']) {
                console.info(`Asset type is not set or asset has no data`);
                return;
            }

            let transformedAsset = null;

            switch (asset['@type']) {
                case ASSET_TYPES.PERSONA:
                    const personaTransformer = new PersonaTransformer(asset, this.namespace);
                    transformedAsset = personaTransformer.transform();
                    break;
                case ASSET_TYPES.ORGANISATION:
                    const organisationTransformer = new OrganisationTransformer(asset, this.namespace);
                    transformedAsset = organisationTransformer.transform();
                    break;
                case ASSET_TYPES.MARKETING_AUTHORISATION:
                    const marketingAuthorisationTransformer = new MarketingAuthorisationTransformer(asset, this.namespace);
                    transformedAsset = marketingAuthorisationTransformer.transform();
                    break;
                default:
                    console.info(`Asset not found of type ${asset['@type']}`);
            }

            if (!transformedAsset) {
                return []
            }
            
            const transformedTDGAsset = this.addMetaDataToAsset(TDG_CONSTANTS.ACTION_CREATE, transformedAsset, index)
            transformedTDGAssets.push(transformedTDGAsset);

            // Add roles.
            if(asset['@type'] == ASSET_TYPES.PERSONA){
                if(asset.worksFor){
                    asset.worksFor.forEach((role, index) => {
                        const roleTransformer = new RoleTransformer(role, this.namespace)
                        const transformedAsset2 = roleTransformer.transform()
                        const transformedTDGAsset2 = this.addMetaDataToAsset(TDG_CONSTANTS.ACTION_ASSIGN_ROLE, transformedAsset2, index)
                        transformedTDGAsset2.data.users = [transformedAsset.label]
                        roleTDGAssets.push(transformedTDGAsset2);
                    })
                }
            }
        });

        ////////////////////

        roleTDGAssets.forEach(role => {
            const organisationName = role.originalData.name

            transformedTDGAssets.forEach(asset => {
                if(
                    asset.type == TDG_CONSTANTS.TYPE_ORGANISATION &&
                    asset.originalData.name === organisationName
                ){
                    role.data.orgId = asset.label
                    transformedTDGAssets.push(role)
                }
            })
        })

        transformedTDGAssets.forEach(asset => {
            delete asset.originalData
        })

        // transformedTDGAssets = this.linkData(transformedTDGAssets)

        return transformedTDGAssets;
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

    linkData (data) {
        data.forEach((asset) => {
            if(asset.type == TDG_CONSTANTS.PERSONA){

            }
        })
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
const transformer = (personaName, namespace) => new Transformer(personaName, namespace)

 module.exports = transformer