const PageMapper = require('../../string/page-mapper')

const getApplicationPageURL = (env, page, child) => {
  const pm = new PageMapper(env.APPLICATION_NAME, page)
  // Get the URL and if the url has a leading or trailing slash, remove it
  const path = pm.path.replace(/^\/|\/$/g, '')
  const finalPath = (child) ? `${path}/${pm.getChildren(child).path.replace(/^\/|\/$/g, '')}` : path
  return `${env.APPLICATION_DOMAIN_URL}/${finalPath}`
}

module.exports = getApplicationPageURL