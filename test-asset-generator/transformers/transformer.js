import PersonaTransformer from './types/persona';
import OrganisationTransformer from './types/organisation';
import MarketingAuthorisationTransformer from './types/marketing-authorisation';

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

        let tdgAssetTransformedData = [];

        this.assets.forEach((asset, index) => {
            if (!asset['@type']) {
                console.info(`Asset type is not set or asset has no data`);
                return;
            }

            let transformedData = {};

            switch (asset['@type']) {
                case ASSET_TYPES.PERSONA:
                    const personaTransformer = new PersonaTransformer(asset, this.namespace);
                    transformedData = personaTransformer.transform();
                case ASSET_TYPES.ORGANISATION:
                    const organisationTransformer = new OrganisationTransformer(asset, this.namespace);
                    transformedData = organisationTransformer.transform();
                case ASSET_TYPES.MARKETING_AUTHORISATION:
                    const marketingAuthorisationTransformer = new MarketingAuthorisationTransformer(asset, this.namespace);
                    transformedData = marketingAuthorisationTransformer.transform();
                default:
                    console.info(`Asset not found of type ${asset['@type']}`);
            }

            transformedData.action = 'create';
            transformedData.label = `${asset['@type']}${index}`;

            tdgAssetTransformedData.push(transformedData);
        });

        try {
            tdgAssetTransformedData = this.linkData(tdgAssetTransformedData);
        } catch (e) {
            console.error(e);
            return [];
        }

        try {
            tdgAssetTransformedData = this.formatData(tdgAssetTransformedData);
        } catch (e) {
            console.error(e);
            return [];
        }

        return tdgAssetTransformedData;
    }

    /**
     * Take the data set and map it together via relatable fields.
     *
     * @param {object} data
     */
    linkData(data) {
        // Do something.
        return data;
    }

    /**
     * Take the linked data set and format it for TDG use with actions.
     *
     * @param {object} data
     */
    formatData(data) {
        // Do something.
        return data;
    }
}
