const yaml = require("js-yaml")
const remark = require("remark")
const remarkHTML = require("remark-html")

const MarkdownYamlType = new yaml.Type("!md", {
  kind: "scalar",
  construct: data => {
    const content = remark()
      .use(remarkHTML)
      .processSync(data)
      .toString()

    return '<div class="l-markdown--inline">' + content + "</div>"
  },
})

const MARKDOWN_SCHEMA = yaml.DEFAULT_SCHEMA.extend(MarkdownYamlType)

module.exports = doc => yaml.load(doc, { schema: MARKDOWN_SCHEMA })
