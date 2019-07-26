const { Given } = require ('cucumber')
const runLoginPage = require('./run-login-page')

Given(/^the internal user is logged in$/,
    () => {
        //to be implemented
    })

Given(/^the public user is logged in as '([^']*)?'$/,
    (role) => {
        //to be implemented
    }
)
