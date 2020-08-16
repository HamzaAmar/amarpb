import React from "react"
import { graphql } from "gatsby" // highlight-line
import Layout from "../components/layout"
import styled from "@emotion/styled"

const Container = styled.div`
  padding: 3rem;
`

// highlight-start
export default function BlogPost({ data }) {
  const post = data.markdownRemark
  // highlight-end
  return (
    <Container>
      <h1>hello from blogs</h1>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Container>
  )
}

// highlight-start
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
// highlight-end
