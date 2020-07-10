const plopConfig = plop => {
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
        path: "content/blog/{{dashCase title}}/index.md",
        templateFile: "templates/post.hbs",
        data: { date: new Date().toISOString() },
      },
    ],
  })
}

module.exports = plopConfig
