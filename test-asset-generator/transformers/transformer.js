import PersonaTransformer from './types/persona';
import OrganisationTransformer from './types/organisation';
import RoleTransformer from './types/role';
import MarketingAuthorisationTransformer from './types/marketing-authorisation';
import TDG_CONSTANTS from 'data-generator/common/constants';

const ASSET_TYPES = {
    PERSONA: 'Person',
    ORGANISATION: 'Organization',
    MARKETING_AUTHORISATION: 'MarketingAuthorisation'
};

export default class Transformer {
    constructor(assets, namespace) {
        this.assets = assets;
        this.namespace = namespace;
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
                    asset.worksFor.forEach((roles, index) => {
                        const roleTransformer = new RoleTransformer(roles, this.namespace)
                        const transformedAsset2 = roleTransformer.transform()
                        const transformedTDGAsset2 = this.addMetaDataToAsset(TDG_CONSTANTS.ACTION_ASSIGN_ROLE, transformedAsset2, index)
                        transformedTDGAsset2.data.users = [transformedAsset.label]
                        roleTDGAssets.push(transformedTDGAsset2);
                    })
                }
            }
        });

        ////////////////////

        roleTDGAssets.forEach((role, index) => {
            const organisationName = role.originalData.name

            transformedTDGAssets.forEach((asset) => {
                if(
                    asset.type == TDG_CONSTANTS.TYPE_ORGANISATION &&
                    asset.originalData.name === organisationName
                ){
                    role.data.orgId = asset.label
                    transformedTDGAssets.push(role)
                }
            })
        })

        transformedTDGAssets.forEach((asset) => {
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
