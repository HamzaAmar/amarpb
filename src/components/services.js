import React from "react"
import styled from "@emotion/styled"
import { FiTrendingUp, FiZap, FiDatabase, FiAirplay } from "react-icons/fi"

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 1rem 0;
`

const Service = styled.div`
  width: 40%;
  padding: 2rem 0.2rem;
  background-color: var(--color-background);
  border-radius: 10px;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: var(--color-shadow);

  svg {
    margin-bottom: 1rem;
  }

  :hover {
    box-shadow: 0 0 9px var(--hr);
  }

  h1 {
    color: var(--color-primary-main);
    font-weight: 750;
    letter-spacing: 2px;
  }

  p {
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-size: 0.7rem;
    line-height: 2;
    padding: 1rem 2rem;
    word-spacing: 1px;
  }

  @media (max-width: 468px) {
    width: 100%;
    padding: 0.4rem 0.2rem;
    margin: 0.8rem 0.4rem;

    h1 {
      font-weight: 750;
      font-size: 0.9rem;
      margin: 0.4rem 0.1rem;
    }

    p {
      text-transform: lowercase;
      line-height: 1.7;
      padding: 0.2rem 0.4rem;
    }
  }
`

const services = () => {
  return (
    <Container>
      <Service>
        <FiZap size={35} />
        <h1>Fast</h1>
        <p>
          create High performent website and improve performance to website nice
          score and work with the latest technology
        </p>
      </Service>
      <Service>
        <FiTrendingUp size={35} />

        <h1>SEO</h1>
        <p>
          hello world my name is hamza miloud amar i am a full stack javascript
          developper hello world
        </p>
      </Service>
      <Service>
        <FiDatabase size={35} />

        <h1>BackEnd </h1>
        <p>
          hello world my name is hamza miloud amar i am a full stack javascript
          developper hello world
        </p>
      </Service>
      <Service>
        <FiAirplay size={35} />

        <h1>FrontEnd </h1>
        <p>
          hello world my name is hamza miloud amar i am a full stack javascript
          developer hello world
        </p>
      </Service>
    </Container>
  )
}

export default services
