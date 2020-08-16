import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Article from "../components/Article"
import styled from "@emotion/styled"

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;

  @media (max-width: 468px) {
    flex-direction: column;
  }
`

const Blog = ({ data, ...rest }) => {
  console.log(rest, "from Blogs Page", "Hello World")
  return (
    <>
      <SEO title="blog Page" />
      <Container>
        {data &&
          data.blogs &&
          data.blogs.edges.map(({ node }) => {
            const { frontmatter, fields } = node

            console.log("from Blog Page", node)

            return (
              <Article
                key={frontmatter.title}
                article={{ ...frontmatter, ...fields }}
              />
            )
          })}
      </Container>
    </>
  )
}
export const query = graphql`
  query {
    blogs: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//data/blogs//" } }
      sort: { order: ASC, fields: frontmatter___date }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            date
            author
            keywords
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
export default Blog
