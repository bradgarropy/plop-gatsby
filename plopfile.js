const plopConfig = plop => {
  plop.load("@bradgarropy/plop-pack-helpers")
  plop.load("@bradgarropy/plop-pack-actions")

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
        path: "content/blog/{{slug title}}/index.md",
        templateFile: "templates/post.hbs",
      },
    ],
  })
}

module.exports = plopConfig
