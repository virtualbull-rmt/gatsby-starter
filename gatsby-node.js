const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
// const { fmImagesToRelative } = require("gatsby-remark-relative-source")
const { yamlImagesToRelative } = require("./src/gatsby/yaml-images-to-relative")

const express = require("express")

exports.onCreateDevServer = ({ app }) => {
    app.use("/admin", express.static("public/admin"))
}

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

    const posts = result.data.allMarkdownRemark.edges
    const perPage = 12
    const numPages = Math.ceil(posts.length / perPage)

    posts.forEach(({ node }) => {
        actions.createPage({
            path: node.frontmatter.path,
            component: path.resolve(`src/templates/post.jsx`),
        })
    })

    Array.from({ length: numPages }).forEach((_, i) => {
        actions.createPage({
            path: i === 0 ? `/blog/` : `/blog/${i + 1}/`,
            component: path.resolve("./src/templates/blog.jsx"),
            context: {
                limit: perPage,
                offset: i * perPage,
                total: posts.length,
                perPage,
            },
        })
    })

    return true
}

async function createClientCity({ actions, graphql }) {
    const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "pages/homepage/client/locations/" } }
        sort: [{ frontmatter: { date: DESC } }, { frontmatter: { title: DESC } }]
      ) {
        edges {
          node {
            frontmatter {
              path,
              city_name 
            }
          }
        }
      }
    }
  `)

    if (result.errors) {
        console.error(result.errors)
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        if (!node.frontmatter.path) {
            return
        }
        actions.createPage({
            path: node.frontmatter.path,
            component: path.resolve(`src/templates/homepage.jsx`),
        })
    })

    return true
}

async function createWorkerCity({ actions, graphql }) {
    const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "pages/homepage/worker/locations/" } }
        sort: [{ frontmatter: { date: DESC } }, { frontmatter: { title: DESC } }]
      ) {
        edges {
          node {
            frontmatter {
              path,
              city_name
            }
          }
        }
      }
    }
  `)

    if (result.errors) {
        console.error(result.errors)
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        if (!node.frontmatter.path) {
            return
        }
        actions.createPage({
            path: node.frontmatter.path,
            component: path.resolve(`src/templates/homepage.jsx`),
        })
    })

    return true
}

async function createPages({ actions, graphql }) {
    const result = await graphql(`
    {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/pages/" } }) {
        edges {
          node {
            frontmatter {
              path
              template
            }
          }
        }
      }
    }
  `)

    if (result.errors) {
        console.error(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        if (!node.frontmatter.path) {
            return
        }
        actions.createPage({
            path: node.frontmatter.path,
            component: path.resolve(`src/templates/${node?.frontmatter?.template || 'homepage'}.jsx`),
        })
    })

    return true
}

exports.createPages = async({ actions, graphql }) => {
    await createBlog({ actions, graphql })
    await createClientCity({ actions, graphql })
    await createWorkerCity({ actions, graphql })
    await createPages({ actions, graphql })
}

exports.onCreateNode = ({ node, getNode }) => {
    yamlImagesToRelative({ node, getNode })
        // fmImagesToRelative(node)

        // if (node.internal.type === 'MarkdownRemark') {
        //   console.log(node.frontmatter); // Log frontmatter to inspect data
        // }else{
        //   console.log("formentr");
        // }
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html" || stage === "develop-html") {
        actions.setWebpackConfig({
            module: {
                rules: [{
                    test: /bad-module/,
                    use: loaders.null(),
                }, ],
            },
        })
    }
    actions.setWebpackConfig({
        resolve: {
            alias: {
                "~components": path.resolve(__dirname, "src/components"),
                "~img": path.resolve(__dirname, "src/img"),
                "~utils": path.resolve(__dirname, "src/utils"),
                "~services": path.resolve(__dirname, "src/services"),
            },
        },
    })
}