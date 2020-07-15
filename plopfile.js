const slugify = require("slugify")

const plopConfig = plop => {
  plop.setHelper("date", () => new Date().toISOString())

  plop.setHelper("slugify", text =>
    slugify(text, { lower: true, remove: /[']/g })
  )

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
    ],
  })
}

module.exports = plopConfig
