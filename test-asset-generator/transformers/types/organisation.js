export default class Organisation {
    constructor(data, namespace) {
        this.data = data;
        this.namespace = namespace;
    }

    transform() {
        const data = {
            type: 'OrganisationRecord',
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
            }
        };

        return data;
    }
}
