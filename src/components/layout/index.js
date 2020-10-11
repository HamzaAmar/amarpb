import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Global, css } from "@emotion/core"

import Header from "../header"
import Footer from "../footer"
import SideBar from "../sidebar"

import { globalStyle } from "../../helpers/StyledComponentStyle"
import useMode from "../../hooks/darkMode"
import { Helmet } from "react-helmet"
import config from "../../constants/meta"

const Layout = ({ children, navBarData }) => {
  const [mode, setMode] = useMode()
  const [searchVisible, setSearchVisible] = useState(false)

  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          keywords
        }
      }
    }
  `)

  const title = siteMetadata.title || config.title
  const description = siteMetadata.description || config.description

  return (
    <>
      <Global styles={globalStyle} />
      <Helmet titleTemplate="%s · HMA">
        <html lang="en" />
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
      </Helmet>
      <div
        css={css`
          /* display: grid;
          grid-template-areas: "header header", "sidebar main", "footer footer"; */
        `}
      >
        <Header setSearch={setSearchVisible} setMode={setMode} mode={mode} />
        <div
          css={css`
            display: flex;
            position: relative;
          `}
        >
          <SideBar navBarData={navBarData} />
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
