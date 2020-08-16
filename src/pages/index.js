import React from "react"
import { DiCode } from "react-icons/di"
import styled from "@emotion/styled"

import SEO from "../components/seo"
import Project from "../components/projects"
import About from "../components/about"
import Services from "../components/services"
import { FaGrinWink, FaNetworkWired } from "react-icons/fa"
import Skills from "../components/skills"
// import { Heading } from "../style/styles"

const Container = styled.div`
  background: linear-gradient(
    to right bottom,
    var(--color-background-light),
    var(--color-background-main),
    var(--color-background-light),
    var(--color-background-main)
  );
  width: calc(100vw - 4.8rem);
  height: auto;
  min-height: 100vh;
  padding: 3rem;
  box-shadow: var(--color-shadow);
  display: flex;
  flex-direction: column;

  @media (max-width: 468px) {
    padding: 0 0.3rem;
    width: 100vw;
  }
`

const Heading = styled.h1`
  font-size: 2rem;
  word-spacing: 5px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: transparent;
  background: -webkit-linear-gradient(
    var(--color-primary-light),
    var(--color-primary-dark),
    var(--color-primary-main)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: -15px;
    top: 0;
    background: -webkit-linear-gradient(
      var(--color-primary-light),
      var(--color-primary-dark),
      var(--color-primary-main)
    );
    width: 6px;
    height: 100%;
    display: inline-block;
    justify-self: flex-start;
    border-radius: 5px;
  }

  &::before {
    content: "";
    position: absolute;
    right: -15px;
    top: 0;
    background: -webkit-linear-gradient(
      var(--color-primary-light),
      var(--color-primary-dark),
      var(--color-primary-main)
    );
    width: 6px;
    height: 100%;
    border-radius: 5px;
  }
`

const NavBarData = [
  { id: "about", Icon: <FaNetworkWired size={30} /> },
  { id: "services", Icon: <FaGrinWink size={30} /> },
  { id: "projects", Icon: <DiCode size={30} /> },
]

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <>
      <SEO title="Home" />
      <Container>
        <About />
      </Container>
      <Container auto={true}>
        <Heading>Services</Heading>
        <Services />
      </Container>
      <Container auto={true}>
        <Heading>Skills</Heading>
        <Skills />
      </Container>
      <Container auto={true}>
        <Heading>Projects</Heading>
        <Project />
        {data &&
          data.projects &&
          data.projects.edges.map(({ node }) => {
            const { frontmatter } = node

            return <Project key={frontmatter.title} project={frontmatter} />
          })}
      </Container>
    </>
  )
}

export default IndexPage
