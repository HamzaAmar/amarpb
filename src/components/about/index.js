import React from "react"
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa"

import {
  Container,
  Text,
  NavList,
  TextContent,
  Name,
  ImageWrapper,
} from "./style"

const About = () => {
  return (
    <Container>
      <ImageWrapper>
        <div>
          <img src={"../../favicons/me-192X192.png"} alt="" />
          <span />
        </div>
      </ImageWrapper>
      <TextContent>
        <Name>Hamza Miloud Amar </Name>
        <Text>
          I am full stack javascript developer i worked with javascript 3 year
          ago i create static web site with Gatsby or next js , server side
          rending website with next js , single page application , CMS with
          Strapi and high performance website
        </Text>
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
      </TextContent>
    </Container>
  )
}

export default About
