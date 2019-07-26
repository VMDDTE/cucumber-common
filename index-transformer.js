// Try and convert TAG to TDG files here using assets and engines files

import fs from 'fs-extra'
import Transformer from './test-asset-generator/transformers/transformer'

const assets = []

assets.push(JSON.parse(fs.readFileSync('test-asset-generator/assets/organisations/pterodactyl-laboratories/organisation.json')))
assets.push(JSON.parse(fs.readFileSync('test-asset-generator/assets/organisations/pterodactyl-laboratories/marketing-authorisations/marketing-authorisation.1.json')))
assets.push(JSON.parse(fs.readFileSync('test-asset-generator/assets/organisations/pterodactyl-laboratories/marketing-authorisations/marketing-authorisation.2.json')))
assets.push(JSON.parse(fs.readFileSync('test-asset-generator/assets/organisations/pterodactyl-laboratories/marketing-authorisations/marketing-authorisation.3.json')))

const transformer = new Transformer()
transformer._constructor(assets)
console.log(transformer.transform())
