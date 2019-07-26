export default class MarketingAuthorisation {
    constructor(data) {
        this.data = data;
    }

    transform() {
        const data = {
            type: 'MarketingAuthorisation',
            data: {
                MarketingAuthorisationNumber: this.data.MarketingAuthorisationNumber,
                OrganisationReference: this.data.CompanyNumber,
                ProductName: this.data.ProductName,
                ProductNo: this.data.ProductNo,
                RenewalDate: this.data.RenewalDate
            }
        };

        return data;
    }
}
