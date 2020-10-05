import React from "react"
import { FiTrendingUp, FiZap, FiDatabase, FiAirplay } from "react-icons/fi"
import { Container, Service } from "./style"

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
