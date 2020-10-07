import React from "react"
import { graphql } from "gatsby" // highlight-line
import styled from "@emotion/styled"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Container = styled.div`
  padding: 3rem;
`

// highlight-start
export default function BlogPost({ data }) {
  const post = data.mdx
  // highlight-end
  return (
    <Container>
      <h1>hello from blogs</h1>
      <h1>{post.frontmatter.title}</h1>
      <MDXRenderer>{post.body}</MDXRenderer>
    </Container>
  )
}

// highlight-start
export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
    }
  }
`
// highlight-end
