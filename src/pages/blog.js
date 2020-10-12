import React from "react"

import SEO from "../components/seo"
import Article from "../components/article"
import Layout from "../components/layout"

import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { FaGrinWink, FaNetworkWired } from "react-icons/fa"
import { DiCode } from "react-icons/di"

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: auto;
  grid-gap: 1.5rem;
  padding: 1rem 2rem;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (max-width: 600px) {
    padding: 1rem;
  }
`

const navBarData = [
  { id: "about", Icon: <FaNetworkWired size={30} /> },
  { id: "services", Icon: <FaGrinWink size={30} /> },
  { id: "projects", Icon: <DiCode size={30} /> },
]

const Blog = ({ data }) => {
  console.log(data)
  return (
    <Layout navBarData={navBarData}>
      <SEO title="blog Page" />

      <Container>
        {data &&
          data.blogs &&
          data.blogs.edges.map(({ node }) => {
            const { frontmatter, fields } = node

            return (
              <Article
                key={frontmatter.title}
                article={{ ...frontmatter, ...fields }}
              />
            )
          })}
      </Container>
    </Layout>
  )
}
export const query = graphql`
  query {
    blogs: allMdx(
      filter: { fileAbsolutePath: { regex: "//data/blogs//" } }
      sort: { order: ASC, fields: frontmatter___date }
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
