import moment from 'moment';

export default class MarketingAuthorisation {
    constructor(data, namespace) {
        this.data = data;
        this.namespace = namespace;
    }

    transform() {
        const convertedRenewalDate = moment(this.data.RenewalDate, 'DD/MM/YYYY')

        const data = {
            type: 'MarketingAuthorisation',
            data: {
                MarketingAuthorisationNumber: `${this.data.MarketingAuthorisationNumber}-${this.namespace}`,
                OrganisationReference: this.data.CompanyNumber,
                ProductName: this.data.ProductName,
                ProductNo: this.data.ProductNo,
                RenewalDate: convertedRenewalDate.toISOString()
            }
        };

        return data;
    }
}
