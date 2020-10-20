import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa"

import Text from "../components/field/Text"
import Seo from "../components/seo"
import TextArea from "../components/field/TextArea"
import Layout from "../components/layout"

const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-gap: 3rem;
  padding: 2rem;
`

const Heading = styled.h1`
  font-size: 2rem;
  word-spacing: 5px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: transparent;
  background: -webkit-linear-gradient(
    var(--color-primary-light),
    var(--color-primary-dark),
    var(--color-primary-main)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: -15px;
    top: 0;
    background: -webkit-linear-gradient(
      var(--color-primary-light),
      var(--color-primary-dark),
      var(--color-primary-main)
    );
    width: 6px;
    height: 100%;
    display: inline-block;
    justify-self: flex-start;
    border-radius: 5px;
  }

  &::before {
    content: "";
    position: absolute;
    right: -15px;
    top: 0;
    background: -webkit-linear-gradient(
      var(--color-primary-light),
      var(--color-primary-dark),
      var(--color-primary-main)
    );
    width: 6px;
    height: 100%;
    border-radius: 5px;
  }
`

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 2rem;
  padding: 2rem;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    padding: 1rem;
  }
  @media (max-width: 400px) {
    grid-gap: 0.5rem;
    padding: 0.5rem;
  }

  grid-gap: 20px;
  div {
    justify-self: center;
    img {
      border-radius: 50%;
      width: 100%;
      min-width: 200px;
      max-width: 400px;
    }
  }
  div {
    p {
      font-size: 0.8rem;
      text-transform: uppercase;
      line-height: 1.7;
      font-weight: bold;
      letter-spacing: 1px;
      word-spacing: 2px;
    }
    ul {
      li {
        display: flex;
        align-items: center;
        width: 100%;
        margin: 1rem 0;
        background: var(--color-background);
        box-shadow: 0 0 2px 1px #222;
        padding: 0.3rem 0.6rem;
        border-radius: 10px;
        span {
          margin-left: 1rem;
        }
      }
    }
  }
`

const FormContainer = styled.div`
  width: 100%;
  form {
    margin: 2rem auto;
    width: 95%;
    /* background: var(--color-background-light); */
    padding: 2rem 0;
  }
`
const contact = () => {
  return (
    <Layout>
      <Seo title="contact page" />
      <Container>
        <div className="social">
          <Heading>social Contact</Heading>
        </div>
        <AboutContainer>
          <div>
            <img src="https://picsum.photos/id/350/300/300" alt="hello" />
          </div>
          <div>
            <p>
              Hello and welcome am glad you are here take your time and discover
              some stuff in my website . if you wanna contact me to discuss
              about something please choose the simplest way you like and good
              day and i hope you like my little website
            </p>
            <ul>
              <li>
                <FaPhone size={20} />
                <span> +212630371320</span>
              </li>
              <li>
                <FaEnvelope size={20} />
                <span>hamzamiloudamar@gmail.com</span>
              </li>
              <li>
                <FaFacebook size={20} />
                <span>Hamzaamar</span>
              </li>
              <li>
                <FaTwitter size={20} />
                <span>Hamzaamar</span>
              </li>
              <li>
                <FaLinkedin size={20} />
                <span>Hamzaamar</span>
              </li>
            </ul>
          </div>
        </AboutContainer>
        <FormContainer>
          <Heading>Contact Me</Heading>
          <div
            css={css`
              display: flex;
              align-items: center;
              justify-content: center;
              width: 100%;
            `}
          >
            <form>
              <Text name="name" title="Name" type="text" />
              <Text name="email" title="Email" type="text" />
              <Text name="subject" title="Subject" type="text" />
              <TextArea name="subject" title="Subject" />
            </form>
          </div>
        </FormContainer>
      </Container>
    </Layout>
  )
}

export default contact
