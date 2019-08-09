import fs from 'fs-extra'
import TestDataLoader from './test-asset-generator/test-data-loader'

const runner = new TestDataLoader('Robert Price')
runner.start();
