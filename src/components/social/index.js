import React from "react"
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa"
import { NavList } from "./style"
const index = () => {
  return (
    <NavList>
      <li>
        <FaFacebook size={18} />
      </li>
      <li>
        <FaTwitter size={18} />
      </li>
      <li>
        <FaLinkedin size={18} />
      </li>
      <li>
        <FaGithub size={18} />
      </li>
      <li>
        <FaInstagram size={18} />
      </li>
    </NavList>
  )
}

export default index
