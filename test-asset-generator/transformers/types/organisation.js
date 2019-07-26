export default class Organisation {
    constructor(data) {
        this.data = data;
    }

    transform() {
        const data = {
            type: 'ManufacturerRecord',
            data: {
                Name: this.data.name,
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
