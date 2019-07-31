import * as fs from 'fs-extra';
import Transformer from './transformers/transformer';
import * as DataGenerator from 'data-generator';

export default class Runner {
    constructor(assets, featureName, namespace) {
        this.tmpPath = 'test-asset-generator/tmp';
        this.namespace = namespace;
        this.featureName = featureName;
        this.transformer = new Transformer(assets, namespace);
    }

    start() {
        const tdgAssets = this.transformer.transform()
        this.persistDataToStorage(tdgAssets);
        this.sendToDataGenerator(tdgAssets);
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

            await DataGenerator.generateFromAbsPath(`${this.tmpPath}/${asset.label}.json`, this.featureName, this.namespace)
        }
    }
}
