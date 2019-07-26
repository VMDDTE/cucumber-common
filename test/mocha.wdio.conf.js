exports.config = {
    capabilities: [{
        browserName: 'chrome'
    }],
    before: function before () {
        const chai = require('chai')

        global.expect = chai.expect
        global.assert = chai.assert
        global.should = chai.should()
    }
}
