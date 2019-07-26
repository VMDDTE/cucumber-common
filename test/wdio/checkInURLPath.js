const assert = require('assert')
const path = require('path')

const uut = require('../..')

describe('checkInURLPath()', function () {
    const fileName = path.join('file:///', __dirname, '../fixtures/simple.html')

    browser.url(fileName)

    it('match part of URL', function () {
        assert.doesNotThrow(() => uut.checkInURLPath('/fixtures'))
    })

    it('match part of URL, crossing steps', function () {
        assert.doesNotThrow(() => uut.checkInURLPath('/fixtures/simple'))
    })

    it('throw if does not match part of URL', function () {
        assert.throws(() => uut.checkInURLPath('segment_that_is_not_in_the_url'))
    })
})
