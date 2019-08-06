import TDG_CONSTANTS from 'data-generator/common/constants';

export default class Organisation {
    constructor(data, namespace) {
        this.data = data;
        this.namespace = namespace;
    }

    transform() {
        const data = {
            type: this.mapOrganisationTypeToTDGFormat(this.data.OrganisationType),
            data: {
                Name: `${this.data.Name}-${this.namespace}`,
                Address: {
                    Address: '',
                    Address1: '',
                    Town: '',
                    PostCode: '',
                    Country: ''
                },
                OrganisationReference: this.data.OrganisationReference
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
