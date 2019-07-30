export default class Persona {
    constructor(data) {
        this.data = data;
    }

    transform() {
        const data = {
            type: 'ExternalUserRecord',
            data: {
                name : `${this.data.givenName} ${this.data.familyName}`,
                email: '{usergen}'
            }
        }
        return data;
    }
}
