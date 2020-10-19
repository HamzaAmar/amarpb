import React from "react"

import { Container, Text, TextContent, Name, ImageWrapper } from "./style"
import Social from "../social"

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
        <Social />
      </TextContent>
    </Container>
  )
}

export default About
