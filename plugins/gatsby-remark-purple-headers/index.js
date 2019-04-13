const visit = require("unist-util-visit")
const markdownNodeToString = require("mdast-util-to-string")

module.exports = function({ markdownAST }, pluginOpts) {
  visit(markdownAST, "heading", node => {
    let { depth } = node

    if (depth !== 1) return

    let text = markdownNodeToString(node)

    const html = `
      <h1 style="color: rebeccapurple">
        ${text}
      </h1>
    `

    node.type = "html"
    node.children = undefined
    node.value = html
  })

  return markdownAST
}
