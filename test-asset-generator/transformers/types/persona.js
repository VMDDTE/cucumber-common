export default class Persona {
    constructor(data, namespace) {
        this.data = data;
        this.namespace = namespace;
    }

    transform() {
        const data = {
            type: 'ExternalUserRecord',
            data: {
                name : `${this.data.givenName} ${this.data.familyName}`,
                email: '{usergen}'
            },
            originalData: this.data
        }
        return data;
    }
}
