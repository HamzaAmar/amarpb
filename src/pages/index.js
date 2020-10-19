import React from "react"
import { DiCode } from "react-icons/di"
import styled from "@emotion/styled"
import { FaGrinWink, FaNetworkWired } from "react-icons/fa"


import SEO from "../components/seo"
import Project from "../components/project"
import About from "../components/about"
import Services from "../components/service"
import Skills from "../components/skill"
import Layout from "../components/layout"

// import { Heading } from "../style/styles"

const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(4, auto);
  grid-gap: 2rem;
`
const Section = styled.section`
  padding: 2rem;
  background: linear-gradient(
    to right bottom,
    var(--color-background-light),
    var(--color-background-main),
    var(--color-background-light),
    var(--color-background-main)
  );
  /* width: calc(100vw - var(--shared-value)); */
  width: calc(100%);
  box-shadow: var(--color-shadow);
  @media (max-width: 468px) {
    padding: 0 0.3rem;
    width: 100%;
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

const IndexPage = ({ data }) => {
  return (
    <>
      <SEO title="Home" />

      <Layout>
        <Container>
          <Section>
            <About />
          </Section>
          <Section>
            <Heading>Services</Heading>
            <Services />
          </Section>
          <Section>
            <Heading>Skills</Heading>
            <Skills />
          </Section>
          <Section>
            <Heading>Projects</Heading>
            <Project />
            {data &&
              data.projects &&
              data.projects.edges.map(({ node }) => {
                const { frontmatter } = node

                return <Project key={frontmatter.title} project={frontmatter} />
              })}
          </Section>
        </Container>
      </Layout>
    </>
  )
}

export default IndexPage
