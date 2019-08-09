import * as fs from 'fs-extra';
import transformer from './transformers/transformer';
import * as DataGenerator from 'data-generator';
import short from 'short-uuid'

export default class TestDataLoader {
    constructor(persona) {
        this.tmpPath = 'test-asset-generator/tmp';
        this.tdgAssets = transformer(persona, short.generate());
    }

    start() {
        this.persistDataToStorage(this.tdgAssets);
        this.sendToDataGenerator(this.tdgAssets);
    }

    /**
     * Persist a transformed data set to files.
     *
     * @param {object} data
     */
    persistDataToStorage(data) {
        if (fs.pathExistsSync(this.tmpPath)) {
            fs.removeSync(this.tmpPath);
        }

        fs.mkdirSync(this.tmpPath);

        data.forEach((asset) => {
            fs.writeFileSync(
                `${this.tmpPath}/${asset.label}.json`,
                `{"actions":[${JSON.stringify(asset)}]}` 
            );
        });
    }

    async sendToDataGenerator(data) {
        for (const asset of data) {
            if(!fs.existsSync(`${this.tmpPath}/${asset.label}.json`)){
                console.info(`Asset does not exist at path ${this.tmpPath}/${asset.label}.json`);
                return;
            }

            await DataGenerator.generateFromAbsPath(`${this.tmpPath}/${asset.label}.json`, '', short.generate())
        }
    }
}

const testDataLoader = (name) => new TestDataLoader(name).start()

module.exports = testDataLoader
