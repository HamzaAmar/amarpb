import React, { useState, useEffect } from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import MenuData from "../../constants/Menu"
import { FaSearch, FaMoon } from "react-icons/fa"
import {
  Container,
  MenuContainer,
  NavItem,
  active,
  Nav,
  Logo,
  Menu,
  logoContainer,
} from "./style"

const Header = ({ setSearch, ...rest }) => {
  // const url = typeof window !== "undefined" ? window.location.href : ""

  let websiteTheme
  const [visible, setVisible] = useState(false)
  const [theme, setTheme] = useState(websiteTheme)

  if (typeof window !== "undefined") {
    websiteTheme = window.__theme
  }

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => {
      setTheme(window.__theme)
    }
  }, [])

  const themeToggle = () => {
    window.__setPreferredTheme(websiteTheme === "dark" ? "light" : "dark")
  }

  return (
    <Container>
      <Logo>
        <Link to="/">
          HMA
        </Link>
      </Logo>
      <Nav visible={visible}>
        <ul>
          {MenuData.map(({ id, name, path }) => {
            return (
              <li key={id}>
                <Link to={path} css={NavItem} activeClassName='active'>
                  {name}
                </Link>
              </li>
            )
          })}
        </ul>
      </Nav>
      <div css={logoContainer}>
        <FaMoon
          size="20"
          css={css`
            cursor: pointer;
          `}
          onClick={themeToggle}
        />

        <FaSearch
          size="20"
          css={css`
            cursor: pointer;
          `}
          onClick={() => setSearch(true)}
        />
        <div
          onClick={() => setVisible(v => !v)}
          css={css`
            padding: 1rem;
            cursor: pointer;
            overflow: hidden;
            display: none;

            @media (max-width: 600px) {
              display: block;
            }
          `}
        >
          <Menu visible={visible} />
        </div>
      </div>
    </Container>
  )
}

export default Header
