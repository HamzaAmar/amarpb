import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql, Link } from "gatsby"
import { css } from "@emotion/core"
import { Button } from "../style/styles"

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
`

const Card = styled.div`
  width: calc(100% * 1 / 3 - 2rem);
  margin: 1rem;
  border-radius: 3rem;
  overflow: hidden;
`
const Image = styled.img`
  width: 100%;
  object-fit: cover;
`

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
`

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: var(--color-background-light);
  flex-direction: column;
  transform: translateY(-101%);
  transition: transform 500ms;
`

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      projects: allMarkdownRemark(
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
        data.projects.edges.map(project => {
          return (
            <Card key={project.node.fields.slug}>
              <Image src="https://picsum.photos/id/313/300/300" />

              <Content>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
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
        data.projects.edges.map(project => {
          return (
            <Card key={project.node.fields.slug}>
              <Image src="https://picsum.photos/id/313/300/300" />

              <Content>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
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
        data.projects.edges.map(project => {
          return (
            <Card key={project.node.fields.slug}>
              <Link to={`/project${project.node.fields.slug}`}>
                <Image src="https://picsum.photos/id/313/300/300" />
              </Link>

              <Content>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
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
