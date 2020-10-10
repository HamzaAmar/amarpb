import React from "react"
import { graphql } from "gatsby" // highlight-line
import styled from "@emotion/styled"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "../components/Seo"

const Container = styled.div`
  padding: 3rem;
`

// highlight-start
export default function BlogPost({ data }) {
  const { frontmatter, body } = data.mdx
  // highlight-end
  return (
    <>
      <SEO isBlogPost frontmatter={frontmatter} />
      <Container>
        <h1>hello from blogs</h1>
        <h1>{frontmatter.title}</h1>
        <MDXRenderer>{body}</MDXRenderer>
      </Container>
    </>
  )
}

// highlight-start
export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
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
      body
    }
  }
`
// highlight-end
