import fs from 'fs-extra'
import Runner from './test-asset-generator/runner'

const assets = []

assets.push(JSON.parse(fs.readFileSync('test-asset-generator/assets/personae/robert.json')))
assets.push(JSON.parse(fs.readFileSync('test-asset-generator/assets/organisations/pterodactyl-laboratories/organisation.json')))
assets.push(JSON.parse(fs.readFileSync('test-asset-generator/assets/organisations/pterodactyl-laboratories/marketing-authorisations/marketing-authorisation.1.json')))
assets.push(JSON.parse(fs.readFileSync('test-asset-generator/assets/organisations/pterodactyl-laboratories/marketing-authorisations/marketing-authorisation.2.json')))
assets.push(JSON.parse(fs.readFileSync('test-asset-generator/assets/organisations/pterodactyl-laboratories/marketing-authorisations/marketing-authorisation.3.json')))

const runner = new Runner(assets, 'featureA', 'XYZ')
runner.start();
