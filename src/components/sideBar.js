import React from "react"

import styled from "@emotion/styled"
import { Link } from "gatsby"
import { FaNetworkWired } from "react-icons/fa"

const NavList = styled.nav`
  height: 100vh;
  position: fixed;
  z-index: 1000000000000000000;
  left: 0;
  bottom: 0;
  width: 4rem;
  background: var(--color-background-main);
  background: red;
  transition: transform 0.3s;

  :hover {
    transform: scaleX(2.5);
  }

  @media (max-width: 468px) {
    width: 100vw;
    height: 4rem;
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    align-items: center;
  }
`

const NavItem = ({ children }) => {
  return (
    <li>
      <Link to="hello">{children}</Link>
    </li>
  )
}

const SideBar = ({ navBarData = [] }) => {
  return (
    <NavList>
      <ul>
        {navBarData.map(({ id, Icon }) => {
          return <NavItem key={id}>{Icon}</NavItem>
        })}
      </ul>
    </NavList>
  )
}

export default SideBar
