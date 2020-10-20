import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Articles from "../components/article/articles"
import Layout from "../components/layout"

const Blog = ({ data }) => {
  return (
    <Layout>
      <SEO title="blog Page" />
      <Articles data={data.blogs} />
    </Layout>
  )
}
export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    blogs: allMdx(
      filter: { fileAbsolutePath: { regex: "//data/blogs//" } }
      sort: { order: ASC, fields: frontmatter___date }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            tags
            keywords
            image
            description
            author
            category
          }
        }
      }
    }
  }
`
export default Blog
