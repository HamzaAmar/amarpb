import React from "react"
import { graphql } from "gatsby" // highlight-line
import { MDXRenderer } from "gatsby-plugin-mdx"

// highlight-start
export default function BlogPost({ data }) {
  const post = data.mdx
  // highlight-end
  return (
    <>
      {/* highlight-start */}
      <div>
        <h1>Projects</h1>
        <h1>{post.frontmatter.title}</h1>
        <MDXRenderer>{post.body}</MDXRenderer>
      </div>
      {/* highlight-end */}
    </>
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
