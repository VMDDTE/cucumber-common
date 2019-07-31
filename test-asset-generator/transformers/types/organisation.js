import TDG_CONSTANTS from 'data-generator/common/constants';

export default class Organisation {
    constructor(data, namespace) {
        this.data = data;
        this.namespace = namespace;
    }

    transform() {
        const data = {
            type: this.mapOrganisationTypeToTDGFormat(this.data.organisationType),
            data: {
                Name: `${this.data.name}-${this.namespace}`,
                Address: {
                    Address: this.data.streetAddress,
                    Address1: this.data.addressLocality,
                    Town: this.data.addressRegion,
                    PostCode: this.data.postalCode,
                    Country: this.data.addressCountry
                },
                OrganisationReference: this.data.companyNumber
            },
            originalData: this.data
        };

        return data;
    }

    mapOrganisationTypeToTDGFormat(organisationType) {
        switch (organisationType) {
            case 'Marketing Authorisation Holder':
                return TDG_CONSTANTS.TYPE_ORGANISATION;
            default:
                console.info(`Organisation type ${organisationType} not found`);
        }
    }
}
