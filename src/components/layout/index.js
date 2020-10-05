import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Global, css } from "@emotion/core"
import { AiOutlineClose } from "react-icons/ai"

import Header from "../header"
import Footer from "../footer"

import { globalStyle } from "../../helpers/StyledComponentStyle"
import { Input } from "../../style/styles"
import useMode from "../../hooks/darkMode"
import { Content, SearchContainer } from "./style"
import { ContextProviderComponent } from "../../helpers/context"

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
    <ContextProviderComponent>
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
            display: grid;
            grid-template-columns: "sidebar content";
            @media (max-width: 468px) {
              grid-template-columns: "content";
            }
          `}
        >
          {children}
        </div>
        <Footer />
      </Content>
    </ContextProviderComponent>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
