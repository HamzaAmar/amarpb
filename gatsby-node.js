// gatsby-node.js
const path = require("path")

const { createFilePath } = require(`gatsby-source-filesystem`)

const kebabCase = (str) =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join("-")

const createPosts = (createPage, createRedirect, edges) => {
  edges.forEach(({ node }, i) => {
    const prev = i === 0 ? null : edges[i - 1].node
    const next = i === edges.length - 1 ? null : edges[i + 1].node
    const pagePath = node.fields.slug

    if (node.fields.redirects) {
      node.fields.redirects.forEach((fromPath) => {
        createRedirect({
          fromPath,
          toPath: pagePath,
          redirectInBrowser: true,
          isPermanent: true,
        })
      })
    }

    createPage({
      path: `/blogs${pagePath}`,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: pagePath,
        prev,
        next,
      },
    })
  })
}

const createProjects = (createPage, createRedirect, edges) => {
  edges.forEach(({ node }, i) => {
    const prev = i === 0 ? null : edges[i - 1].node
    const next = i === edges.length - 1 ? null : edges[i + 1].node
    const pagePath = node.fields.slug

    if (node.fields.redirects) {
      node.fields.redirects.forEach((fromPath) => {
        createRedirect({
          fromPath,
          toPath: pagePath,
          redirectInBrowser: true,
          isPermanent: true,
        })
      })
    }

    createPage({
      path: `/projects${pagePath}`,
      component: path.resolve(`./src/templates/project.js`),
      context: {
        slug: pagePath,
        prev,
        next,
      },
    })
  })
}

function createBlogPages({ blogs, actions }) {
  if (!blogs.edges.length) {
    throw new Error("There are no posts!")
  }

  const { edges } = blogs
  const { createRedirect, createPage } = actions
  createPosts(createPage, createRedirect, edges)
  return null
}

function createProjectPages({ projects, actions }) {
  if (!projects.edges.length) {
    throw new Error("There are no posts!")
  }

  const { edges } = projects
  const { createRedirect, createPage } = actions
  createProjects(createPage, createRedirect, edges)
  return null
}

function createBlogLists({ blogs: { edges }, actions }) {
  const { createPage } = actions
  const postsPerPage = 12
  const numPages = Math.ceil(edges.length / postsPerPage)
  const arrayFromBlog = Array.from({ length: 5 })
  arrayFromBlog.forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve("./src/templates/blog-list.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
  return null
}

function createTagsPost({ tagsGroup: tags, actions }) {
  const { createPage } = actions

  // Make tag pages
  tags.group.forEach((tag) => {
    createPage({
      path: `/tags/${kebabCase(tag.fieldValue)}/`,
      component: path.resolve(`./src/templates/tags.js`),
      context: {
        tag: tag.fieldValue,
        count: tag.totalCount,
      },
    })
  })
  return null
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const { data, errors } = await graphql(`
    query {
      blogs: allMdx(filter: { fileAbsolutePath: { regex: "//data/blogs//" } }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      projects: allMdx(
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
      tagsGroup: allMdx(
        filter: { fileAbsolutePath: { regex: "//data/blogs//" } }
      ) {
        group(field: frontmatter___tags) {
          totalCount
          fieldValue
        }
      }
    }
  `)

  const { projects, blogs, tagsGroup } = data

  createBlogLists({ blogs, actions })
  createBlogPages({ blogs, actions })
  createProjectPages({ projects, actions })
  createTagsPost({ tagsGroup, actions })
}
