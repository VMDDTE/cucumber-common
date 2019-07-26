"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var common = require('../json/common-pages.json');
/**
 * Gets a single page from a common name
 *
 * @param app {String} The App context to run in (e.g. 'manage-my-business')
 * @param page {String} The page's common name to look for
 */


var PageMapper =
/*#__PURE__*/
function () {
  function PageMapper(app, page) {
    _classCallCheck(this, PageMapper);

    this.app = app;
    this.page = this.getPage(this.getApp(), page);
    this.path = this.page.path;
    this.children = this.page.children || [];
  }

  _createClass(PageMapper, [{
    key: "getApp",
    value: function getApp() {
      var _this = this;

      var app = common.find(function (c) {
        return c.application === _this.app;
      });

      if (app !== undefined) {
        return app.pages;
      } else {
        throw new Error("No application found called ".concat(this.app));
      }
    }
  }, {
    key: "getPage",
    value: function getPage(context, page) {
      return context.find(function (p) {
        return p.names.map(function (n) {
          return n.toLowerCase();
        }).indexOf(page.toLowerCase()) !== -1;
      });
    }
  }, {
    key: "getChildren",
    value: function getChildren(child) {
      return this.getPage(this.children, child);
    }
  }]);

  return PageMapper;
}();

module.exports = PageMapper;