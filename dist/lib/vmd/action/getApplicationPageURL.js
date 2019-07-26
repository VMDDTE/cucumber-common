"use strict";

var PageMapper = require('../../string/page-mapper');

var getApplicationPageURL = function getApplicationPageURL(env, page, child) {
  var pm = new PageMapper(env.APPLICATION_NAME, page); // Get the URL and if the url has a leading or trailing slash, remove it

  var path = pm.path.replace(/^\/|\/$/g, '');
  var finalPath = child ? "".concat(path, "/").concat(pm.getChildren(child).path.replace(/^\/|\/$/g, '')) : path;
  return "".concat(env.APPLICATION_DOMAIN_URL, "/").concat(finalPath);
};

module.exports = getApplicationPageURL;