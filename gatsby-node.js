/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
const path = require("path")
const { fmImagesToRelative } = require("gatsby-remark-relative-source");

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node);
};

async function createBlog({ actions, graphql }) {
  const result = await graphql(`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: [{ frontmatter: { date: DESC } }, { frontmatter: { title: DESC } }]
    ) {
      edges {
        node {
          frontmatter {
            path
          }
        }
      }
    }
  }
`)

  if (result.errors) {
      console.error(result.errors)
  }

  console.log(result)

  const posts = result.data.allMarkdownRemark.edges
  const perPage = 12
  const numPages = Math.ceil(posts.length / perPage)

  posts.forEach(({ node }) => {
    console.log(node);
    console.log(node.frontmatter.path)
      actions.createPage({
          path: node.frontmatter.path,
          component: path.resolve(`src/templates/blog-post.jsx`),
          context: {
            pagePath: node.frontmatter.path,
          },
      })
  })

  // Array.from({ length: numPages }).forEach((_, i) => {
  //     actions.createPage({
  //         path: i === 0 ? `/blog/` : `/blog/${i + 1}/`,
  //         component: path.resolve("./src/templates/blog.jsx"),
  //         context: {
  //             limit: perPage,
  //             offset: i * perPage,
  //             total: posts.length,
  //             perPage,
  //         },
  //     })
  // })

  return true
}

exports.createPages = async({ actions, graphql }) => {
  await createBlog({ actions, graphql })
  
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}

