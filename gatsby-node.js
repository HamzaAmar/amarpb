// gatsby-node.js
const path = require("path")

const { createFilePath } = require(`gatsby-source-filesystem`)

const createPosts = (createPage, createRedirect, edges) => {
  edges.forEach(({ node }, i) => {
    const prev = i === 0 ? null : edges[i - 1].node
    const next = i === edges.length - 1 ? null : edges[i + 1].node
    const pagePath = node.fields.slug

    console.log("testing value", prev, next, node.slug)

    if (node.fields.redirects) {
      node.fields.redirects.forEach(fromPath => {
        createRedirect({
          fromPath,
          toPath: pagePath,
          redirectInBrowser: true,
          isPermanent: true,
        })
      })
    }

    console.log(node)

    createPage({
      path: `/blogs${pagePath}`,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: pagePath,
        // prev,
        // next,
      },
    })
  })
}

function createBlogPages({ blogs, actions }) {
  console.log("from create blog pages", JSON.stringify(blogs), "from")

  if (!blogs.edges.length) {
    throw new Error("There are no posts!")
  }

  const { edges } = blogs
  const { createRedirect, createPage } = actions
  createPosts(createPage, createRedirect, edges)
  return null
}

const createProjects = (createPage, createRedirect, edges) => {
  edges.forEach(({ node }, i) => {
    const prev = i === 0 ? null : edges[i - 1].node
    const next = i === edges.length - 1 ? null : edges[i + 1].node
    const pagePath = node.fields.slug

    console.log("testing value", prev, next, node.slug)

    if (node.fields.redirects) {
      node.fields.redirects.forEach(fromPath => {
        createRedirect({
          fromPath,
          toPath: pagePath,
          redirectInBrowser: true,
          isPermanent: true,
        })
      })
    }

    console.log(node)

    createPage({
      path: `/projects${pagePath}`,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: pagePath,
        // prev,
        // next,
      },
    })
  })
}

function createProjectPages({ blogs, actions }) {
  if (!blogs.edges.length) {
    throw new Error("There are no posts!")
  }

  const { edges } = blogs
  const { createRedirect, createPage } = actions
  createProjects(createPage, createRedirect, edges)
  return null
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    console.log(slug, "slug from create node")
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const { data, errors } = await graphql(`
    query {
      blogs: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "//data/blogs//" } }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      projects: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "//data/projects//" } }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const { projects, blogs } = data

  console.log(JSON.stringify(blogs, null, 4))
  createBlogPages({ blogs, actions })
}
