const babel = require("@babel/register")
const personaEngine = require('./test-asset-generator/engines/persona-engine')
const common = require('./lib/common')
const override = require('./lib/vmd')
const string = require('./lib/string')

export default [
    common,
    override,
    personaEngine,
    string
]
