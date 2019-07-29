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
        const tmpPath = 'test-asset-generator/tmp';

        if (fs.pathExistsSync(tmpPath)) {
            fs.removeSync(tmpPath);
        }

        fs.mkdirSync(tmpPath);

        data.forEach((asset) => {
            fs.writeFileSync(
                `${tmpPath}/${asset.label}.json`,
                JSON.stringify(asset)
            );
        });
    }
}
