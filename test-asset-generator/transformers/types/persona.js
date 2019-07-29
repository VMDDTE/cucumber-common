export default class Persona {
    constructor(data) {
        this.data = data;
    }

    transform() {
        const data = {
            type: "Person",
            label: this.data.label,
            data: {
                name : this.data.givenName + ' ' + this.data.familyName,
                email: this.data.email
            }
        }
        return data;
    }
}
