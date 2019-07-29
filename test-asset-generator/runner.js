import * as fs from 'fs-extra';
import Transformer from './transformers/transformer';

export default class Runner {
    constructor(assets, namespace) {
        this.transformer = new Transformer(assets, namespace);
    }

    start() {
        const tdgAssets = this.transformer.transform();
        this.persistDataToStorage(tdgAssets);
    }

    /**
     * Persist a transformed data set to files.
     *
     * @param {object} data
     */
    persistDataToStorage(data) {
        if (fs.pathExistsSync('test-asset-generator/tmp')) {
            fs.removeSync('test-asset-generator/tmp');
        }

        fs.mkdirSync('test-asset-generator/tmp');

        data.forEach((asset, index) => {
            fs.writeFileSync(
                `test-asset-generator/tmp/${asset.label}.json`,
                JSON.stringify(asset)
            );
        });
    }
}
