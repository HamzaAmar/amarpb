import React from "react"

import { Link } from "gatsby"
import { FaNetworkWired } from "react-icons/fa"
import { NavList, Container, ListItem } from "./style"

const NavItem = ({ Icon , name }) => {
  return (
    <li >
      <Link to="hello">
        <ListItem>
          {Icon}
          <h3>
            {name}
          </h3>
        </ListItem>
      </Link>
    </li>
  )
}

const SideBar = ({ navBarData = [] }) => {
  return (
    <NavList>
        {navBarData.map(({ id,...navItems }) => {
          return <NavItem key={id} {...navItems} />
        })}
    </NavList>
  )
}

export default SideBar
