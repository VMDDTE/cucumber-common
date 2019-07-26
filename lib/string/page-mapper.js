const common = require('../json/common-pages.json')

/**
 * Gets a single page from a common name
 *
 * @param app {String} The App context to run in (e.g. 'manage-my-business')
 * @param page {String} The page's common name to look for
 */

class PageMapper {
  constructor(app, page) {
    this.app = app
    this.page = this.getPage(this.getApp(), page)
    this.path = this.page.path
    this.children = this.page.children || []
  }

  getApp () {
    const app = common
      .find(c => c.application === this.app)
    if (app !== undefined) {
      return app.pages
    } else {
      throw new Error(`No application found called ${this.app}`)
    }
  }
  
  getPage (context, page) {
    return context
      .find(p => p.names
        .map(n => n.toLowerCase())
        .indexOf(page.toLowerCase()) !== -1
      )
  }

  getChildren (child) {
    return this.getPage(this.children, child)
  }
}

module.exports = PageMapper
