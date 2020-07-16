const slugify = require("slugify")

const helpers = plop => {
  plop.setDefaultInclude({ helpers: true })

  plop.setHelper("date", () => new Date().toISOString())

  plop.setHelper("slugify", text =>
    slugify(text, { lower: true, remove: /[']/g })
  )
}

module.exports = helpers
