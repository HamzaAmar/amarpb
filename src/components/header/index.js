import React, { useState, useEffect } from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import MenuData from "../../constants/Menu"
import { FaSearch, FaMoon } from "react-icons/fa"
import { Container, MenuContainer, NavItem, Nav, Logo, Menu } from "./style"

const Header = ({ setSearch, ...rest }) => {
  // const url = typeof window !== "undefined" ? window.location.href : ""

  let websiteTheme
  const [active, setActive] = useState("Home")
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
    <div
      css={css`
        overflow: hidden;
      `}
    >
      <Container>
        <Link to="/" as={Logo}>
          HMA
        </Link>
        <Nav>
          <ul>
            {MenuData.map(({ id, name, path }) => {
              return (
                <NavItem key={id} active={active === name}>
                  <Link onClick={() => setActive(name)} to={path}>
                    {name}
                  </Link>
                </NavItem>
              )
            })}
          </ul>
        </Nav>
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.3rem 1rem;
            width: 12rem;
          `}
        >
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

              @media (max-width: 768px) {
                display: block;
              }
            `}
          >
            <Menu visible={visible} />
          </div>
        </div>
      </Container>
      <MenuContainer visible={visible}>
        <ul
          css={css`
            position: relative;
            z-index: 300;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            flex-direction: column;
            height: 100%;
            font-size: 1.4rem;
            /* font-weight: bold; */
            letter-spacing: 2px;
            text-transform: uppercase;
          `}
        >
          <li
            css={css`
              transform: ${visible ? "translateY(0)" : "translateY(-100vh)"};
              transition: transform 200ms;
              transition-delay: 1.2s;
              cursor: pointer;
              :hover {
                padding-bottom: 3rem;
                border-bottom: 1px solid black;
              }
            `}
          >
            Home
          </li>
          <li
            css={css`
              transform: ${visible ? "translateY(0)" : "translateY(-100vh)"};
              transition: transform 200ms;
              transition-delay: 1s;
              cursor: pointer;
              :hover {
                padding-bottom: 3rem;
                border-bottom: 1px solid black;
              }
            `}
          >
            Blog
          </li>
          <li
            css={css`
              transform: ${visible ? "translateY(0)" : "translateY(-100vh)"};
              transition: transform 200ms;
              transition-delay: 800ms;
              cursor: pointer;
              :hover {
                padding-bottom: 3rem;
                border-bottom: 1px solid black;
              }
            `}
          >
            Contact
          </li>
        </ul>
      </MenuContainer>
    </div>
  )
}

export default Header
