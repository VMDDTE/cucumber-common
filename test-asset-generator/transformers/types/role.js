const TDG_CONSTANTS = require('data-generator/common/constants')

class Role {
    constructor(roleName, namespace) {
        this.role = roleName;
        this.namespace = namespace;
    }

    transform() {
        this.data = {
            type: this.mapRoleTypeToTDGFormat(this.role),
            data: {}
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

module.exports = Role