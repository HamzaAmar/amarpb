import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "@emotion/styled"
import { FaMapMarker } from "react-icons/fa"
import { css } from "@emotion/core"
import { Link } from "gatsby"

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 5rem);
  display: flex;
  align-items: center;
  justify-content: center;
`

const Content = styled.div`
  width: 40rem;
  height: 25rem;
  border-radius: 0.2rem;
  margin: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 40vmin;
    font-weight: 800;
  }
  h3 {
    font-size: 5vmin;
    font-weight: 700;
  }
`

const map = css`
  ::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 5px;
    width: 101%;
    height: 200%;
    transform: translateY(-50%);
    background: transparent;
    border-top: 3px dashed red;
    border-radius: 100%;
  }
`

const MapContent = styled.ul`
  margin: auto;
  align-items: center;
  display: flex;
  height: 10rem;
  width: 70%;

  li {
    display: flex;
    flex: 1 0;
    height: 50%;
  }
  span {
    margin-left: 1rem;
  }
`

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404: Not Found" />
      <Container>
        <Content>
          <h1>404</h1>
          <h3>Page Not Found</h3>
          <p>
            We Think that You get Lost and we think that you need help please
            check our map to go fast for the page that you need
          </p>
          <MapContent>
            <li>
              <Link to="/">
                <FaMapMarker color="red" />
                <span>Home </span>
              </Link>
            </li>
            <li>
              <Link to="blog">
                <FaMapMarker color="red" />
                <span>Blog </span>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <FaMapMarker color="red" />
                <span>Contact </span>
              </Link>
            </li>
          </MapContent>
        </Content>
      </Container>
    </Layout>
  )
}

export default NotFoundPage
