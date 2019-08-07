class Persona {
    constructor(data, namespace) {
        this.data = data;
        this.namespace = namespace;
    }

    transform() {
        const data = {
            type: 'ExternalUserRecord',
            data: {
                name : this.data.Name,
                email: '{usergen}'
            }
        }
        return data;
    }
}

module.exports = Persona