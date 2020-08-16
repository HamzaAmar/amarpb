import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import { AiOutlineClose } from "react-icons/ai"

import Header from "./header"
import SideBar from "./sideBar"
import { theme, globalStyle } from "../helpers/StyledComponentStyle"
import { Input } from "../style/styles"
import useMode from "../hooks/darkMode"
import { COLORS } from "../constants/variables"
import Footer from "./footer"

const Content = styled.section``
const SearchContainer = styled.div`
  visibility: ${({ search }) => (search ? "visible" : "hidden")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: red;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 10000;
  transform: ${({ search }) =>
    search ? "translateY(0)" : "translateY(-100%)"};
  transition: transform 1s;
`

const Layout = ({ children, navBarData }) => {
  const [mode, setMode] = useMode()

  const [searchVisible, setSearchVisible] = useState(false)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Global styles={globalStyle} />
      <Header
        setSearch={setSearchVisible}
        siteTitle={data.site.siteMetadata.title}
        setMode={setMode}
        mode={mode}
      />
      <SearchContainer search={searchVisible}>
        <AiOutlineClose
          size="30"
          css={css`
            justify-self: flex-start;
            position: absolute;
            top: 2rem;
            cursor: pointer;
            right: 2rem;
          `}
          onClick={() => setSearchVisible(false)}
        />

        <Input type="text" placeholder="Search For Blog" />
      </SearchContainer>
      <Content>
        <div
          css={css`
            display: flex;
            flex-direction: row;

            @media (max-width: 468px) {
              flex-direction: column-reverse;
            }
          `}
        >
          <SideBar navBarData={navBarData} />
          <main
            css={css`
              margin-left: 4rem;
              @media (max-width: 468px) {
                margin-left: 0;
              }
            `}
          >
            {children}
          </main>
        </div>
        <Footer />
      </Content>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
