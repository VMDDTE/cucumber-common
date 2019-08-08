const TDG_CONSTANTS = require('data-generator/common/constants')

class Organisation {
    constructor(data, namespace) {
        this.data = data;
        this.namespace = namespace;
    }

    transform() {
        const data = {
            type: this.mapOrganisationTypeToTDGFormat(this.data.OrganisationType),
            data: {
                Name: `${this.data.Name}-${'${' + this.namespace + '}'}`,
                Address: {
                    Address: '',
                    Address1: '',
                    Town: '',
                    PostCode: '',
                    Country: ''
                },
                OrganisationReference: this.data.OrganisationReference
            }
        };

        return data;
    }

    mapOrganisationTypeToTDGFormat(organisationType) {
        switch (organisationType) {
            case 'Manufacturer':
                return TDG_CONSTANTS.TYPE_MANUFACTURER;
            case 'Marketing Authorisation Holder':
                return TDG_CONSTANTS.TYPE_ORGANISATION;
            default:
                console.info(`Organisation type ${organisationType} not found`);
        }
    }
}

module.exports = Organisation