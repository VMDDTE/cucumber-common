const Step = require('cucumber').defineStep
const { getApplicationPageURL } = require('../../vmd')

Step(/^I am on the (.*) page$/, page => browser.url(getApplicationPageURL(process.env, page)))
  