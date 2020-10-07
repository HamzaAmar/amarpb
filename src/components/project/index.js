import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Button } from "../../style/styles"
import { Container, Card, Image, ButtonWrapper, Content } from "./style"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      projects: allMdx(
        filter: { fileAbsolutePath: { regex: "//data/projects//" } }
        sort: { order: ASC, fields: frontmatter___date }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              description
              tags
              image
            }
          }
        }
      }
    }
  `)

  console.log(data && data.projects && data.projects.edges[0].node.fields.slug)
  return (
    <Container>
      {data &&
        data.projects &&
        data.projects.edges.map(({ node }) => {
          console.log(node)
          return (
            <Card key={node.fields.slug}>
              <Image
                src="https://picsum.photos/id/313/300/300"
                alt={node.frontmatter.description}
              />

              <Content>
                <h1>{node.frontmatter.title}</h1>
                <p>{node.frontmatter.description}</p>
                <ButtonWrapper>
                  <Button>See More</Button>
                  <Button>Code Source</Button>
                </ButtonWrapper>
              </Content>
            </Card>
          )
        })}
      {data &&
        data.projects &&
        data.projects.edges.map(({ node }) => {
          return (
            <Card key={node.fields.slug}>
              <Image src="https://picsum.photos/id/313/300/300" />

              <Content>
                <h1>{node.frontmatter.title}</h1>
                <p>{node.frontmatter.description}</p>
                <ButtonWrapper>
                  <Button>See More</Button>
                  <Button>Code Source</Button>
                </ButtonWrapper>
              </Content>
            </Card>
          )
        })}
      {data &&
        data.projects &&
        data.projects.edges.map(({ node }) => {
          return (
            <Card key={node.fields.slug}>
              <Link to={`/project${node.fields.slug}`}>
                <Image src="https://picsum.photos/id/313/300/300" />
              </Link>

              <Content>
                <h1>{node.frontmatter.title}</h1>
                <p>{node.frontmatter.description}</p>
                <ButtonWrapper>
                  <Button>See More</Button>
                  <Button>Code Source</Button>
                </ButtonWrapper>
              </Content>
            </Card>
          )
        })}
    </Container>
  )
}

export default Projects
