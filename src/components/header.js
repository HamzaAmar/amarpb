import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import MenuData from "../constants/Menu"
import { FaSearch, FaMoon } from "react-icons/fa"

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 4rem;
  min-height: 4.5rem;
  padding: 0 3rem;
  position: relative;
  z-index: 10000000000;
  background: var(--color-background-main);
  box-shadow: var(--color-shadow);

  @media (max-width: 468px) {
    margin-left: 0;
    padding: 0 1rem;
  }
`

const MenuContainer = styled.div`
  margin-left: 4rem;
  position: absolute;
  background: var(--color-primary-main);
  top: 4rem;
  width: calc(100vw - 5rem);
  height: calc(100vh - 5rem);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 2rem 0;
  flex-wrap: wrap;
  z-index: 100;
  transform: ${({ visible }) =>
    visible ? "translateY(0)" : "translateY(-120%)"};
  transition: transform 200ms;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;
    background: var(--color-primary-main);
    left: 0;
    transform: ${({ visible }) =>
      visible ? "translateX(0)" : "translateX(-120%)"};
    transition: transform 300ms linear 500ms;
    filter: opacity(1);
  }
  &::after {
    left: 50%;
    transform: ${({ visible }) =>
      visible ? "translateX(0)" : "translateX(120%)"};
    transition: transform 300ms linear 500ms;
  }
`

const Menu = styled.div`
  background: var(--color-primary-main);
  width: 1.6rem;
  height: 2.5px;
  position: relative;
  border-radius: 3px;
  transform: ${({ visible }) =>
    visible ? "translateX(3rem)" : "translateX(0)"};
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: -7px;
    right: 0;
    background: var(--color-primary-main);
    width: 1.9rem;
    height: 100%;
    border-radius: 3px;
    transform: ${({ visible }) =>
      visible ? "translate(-3rem, -130%) rotate(45deg)" : "translateX(0)"};
    transform-origin: left;
    transition: transform 1s;
  }
  &::after {
    top: 7px;
    transform: ${({ visible }) =>
      visible ? "translate(-3rem,100%) rotate(-45deg)" : "translateX(0)"};
  }
`

const Nav = styled.nav`
  flex-grow: 2;
  align-self: stretch;
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }

  ul {
    display: flex;
    justify-content: space-evenly;
    font-size: 0.86rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const Logo = styled.h1`
  letter-spacing: 4px;
  font-size: 1.8rem;
  color: var(--color-primary-main);
  text-transform: uppercase;
  transform: skew(10);
  text-shadow: var(--color-text);
  font-weight: 900;

  @media (max-width: 468px) {
    letter-spacing: 2px;
    font-size: 1.4rem;
  }
`

const NavItem = styled.li`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;

  :hover::after {
    transform: scale(1);
    transition: transform 0.6s;
    transform-origin: right;
  }
  &::after {
    content: "";
    position: absolute;
    top: 95%;
    left: 0;
    background: linear-gradient(
      to right,
      var(--color-primary-dark),
      var(--color-primary-light)
    );
    width: 101%;
    height: 3px;
    transform: scale(0);
    border-radius: 3px;
    ${({ active }) => active && ` transform: scale(1)`}
  }
`

const Header = ({ setSearch, ...rest }) => {
  const url = typeof window !== "undefined" ? window.location.href : ""
  console.log(
    "hhello from Header Component this is the value of url",
    url.split("/")
  )
  let websiteTheme
  const [active, setActive] = useState("Home")
  const [visible, setVisible] = useState(false)
  const [theme, setTheme] = useState(websiteTheme)
  console.log(active, "from Header")

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
        <Logo>HMA</Logo>
        <Nav>
          <ul>
            {MenuData.map(({ id, name, path }) => {
              return (
                <NavItem key={id} active={active === name}>
                  <Link
                    onClick={() => {
                      console.log(name, active)
                      setActive(name)
                      console.log(name, active)
                    }}
                    to={path}
                  >
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
