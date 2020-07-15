const fs = require("fs")
const path = require("path")
const slugify = require("slugify")

const plopConfig = plop => {
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

  plop.setGenerator("post", {
    description: "A basic Gatsby starter blog post.",
    prompts: [
      {
        type: "input",
        name: "title",
        message: "What is the title of the blog post?",
      },
      {
        type: "input",
        name: "description",
        message: "What is the blog post about?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "content/blog/{{slugify title}}/index.md",
        templateFile: "templates/post.hbs",
      },
      {
        type: "copy",
        src: "static/blank.jpg",
        dest: "content/blog/{{slugify title}}/images/blank.jpg",
      },
    ],
  })
}

module.exports = plopConfig
