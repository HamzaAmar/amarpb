import React from "react"

import { Link } from "gatsby"
import { FaNetworkWired } from "react-icons/fa"
import { NavList } from "./style"

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
