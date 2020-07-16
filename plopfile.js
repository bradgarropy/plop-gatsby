const plopConfig = plop => {
  plop.load("./plop/helpers.js")
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
