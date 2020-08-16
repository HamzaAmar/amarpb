import React from "react"
import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/core"
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa"

const animation = keyframes`
  0{
    transform:translate(-100%, -100%);
  }
  50%{
    transform:translate(10%, 10%);

  }
  100%{
    transform:translate(-10%, -10%);

  }
`
const opacity = keyframes`
  0%{
    opacity:1;
  }
  50%{
    opacity:0.8;
  }
  100%{
    opacity:1;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: calc(100vh - 5rem);
  flex-grow: 1;

  @media (max-width: 468px) {
    display: block;
    height: auto;
  }
`
const Name = styled.h3`
  font-size: 2.3rem;
  word-spacing: 5px;
  letter-spacing: 1px;
  color: transparent;
  background: -webkit-linear-gradient(
    var(--color-primary-light),
    var(--color-primary-dark)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;

  @media (max-width: 468px) {
    font-size: 1.4rem;
    word-spacing: 1px;
    font-weight: 800;
  }
`

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.7;
  flex-grow: 1;
  width: 50%;

  @media (max-width: 468px) {
    width: 100%;
    padding: 1rem;
  }
`

const NavList = styled.ul`
  display: flex;
  li {
    padding: 1rem;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    margin: 1rem;
    cursor: pointer;
    position: relative;
    box-shadow: var(--color-shadow);
    z-index: 1;
    overflow: hidden;

    ::before {
      content: "";
      background: var(--color-primary-main);
      position: absolute;
      top: 0;
      left: 0;
      width: 120%;
      height: 120%;
      border-radius: 30%;
      /* transform: rotate(45deg) translateX(-40%) translateY(30%); */
      transform: rotate(45deg) translate(-120%, 0);
      z-index: -1;
    }
    &:hover::before {
      animation: ${animation} 1s 1 forwards;
    }
    &:hover svg {
      fill: var(--color-background);
    }
  }
`
const Text = styled.p`
  word-spacing: 2px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 0.9rem;
  width: 65%;
  line-height: 2;
  justify-self: center;

  @media (max-width: 468px) {
    width: 100%;
    word-spacing: 0;
    letter-spacing: 1px;
    font-size: 0.8rem;
  }
`

const ImageWrapper = styled.div`
  height: 400px;
  flex-grow: 1;
  width: 50%;
  border-radius: 50%;
  /* padding: 4rem; */
  /* background: red; */
  position: relative;

  @media (max-width: 468px) {
    display: none;
  }

  ::before {
    content: "";
    position: absolute;
    top: -20%;
    left: -20%;
    width: 100%;
    background: var(--color-primary-light);
    /* background: brown; */
    height: 100%;
    border-radius: 30% 40% 30% 40% / 60% 30% 60% 30%;
    box-shadow: 0 0 100px inset var(--color-primary-dark);
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 30% 40% 30% 40% / 60% 30% 60% 30%;
  }
`

const About = () => {
  return (
    <Container>
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
            <FaFacebook size={30} />
          </li>
          <li>
            <FaTwitter size={30} />
          </li>
          <li>
            <FaLinkedin size={30} />
          </li>
          <li>
            <FaGithub size={30} />
          </li>
          <li>
            <FaInstagram size={30} />
          </li>
        </NavList>
      </TextContent>
      <ImageWrapper>
        <img src="/me.jpeg" />
        <span />
      </ImageWrapper>
    </Container>
  )
}

export default About
