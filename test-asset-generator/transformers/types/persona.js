export default class Persona {
    constructor(data) {
        this.data = data;
    }

    transform() {
        const data = {
            type: "Person",
            data: {
                givenName : this.data.givenName,
                familyName: this.data.familyName,
                additionalName: this.data.additionalName,
                gender: this.data.gender,
                email: this.data.email,
                birthDate: this.data.birthDate,
                jobTitle: this.data.jobTitle,
                RCVSNo: this.data.RCVSNo,
                // Not sure if this should be a map over the array?
                worksFor: this.data.worksFor
            }
        }
        return data;
    }
}
