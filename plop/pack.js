const fs = require("fs")
const path = require("path")
const slugify = require("slugify")

const actions = plop => {
  plop.setDefaultInclude({ helpers: true, actionTypes: true })

  plop.setHelper("date", () => new Date().toISOString())

  plop.setHelper("slugify", text =>
    slugify(text, { lower: true, remove: /[']/g })
  )

  plop.setActionType("copy", (answers, config, plop) => {
    const src = plop.renderString(config.src, answers)
    const dest = plop.renderString(config.dest, answers)

    const dirname = path.dirname(dest)

    fs.mkdirSync(dirname)
    fs.copyFileSync(src, dest)
  })
}

module.exports = actions
