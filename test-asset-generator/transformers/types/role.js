import TDG_CONSTANTS from 'data-generator/common/constants';

export default class Role {
    constructor(data, namespace) {
        this.data = data;
        this.namespace = namespace;
    }

    transform() {
        this.data = {
            type: this.mapRoleTypeToTDGFormat(this.data.role),
            data: {},
            originalData: this.data
        };

        return this.data;
    }

    attachData(organisationLabel, userLabels) {
        this.data.data = {
            orgId: organisationLabel,
            users: [userLabels]
        }

        return this.data;
    }

    mapRoleTypeToTDGFormat(roleType) {
        switch (roleType) {
            case 'Primary Admin':
                return TDG_CONSTANTS.TYPE_PRIMARY_ADMIN_ROLE;
            default:
                console.info(`Role type ${roleType} not found`);
        }
    }
}
