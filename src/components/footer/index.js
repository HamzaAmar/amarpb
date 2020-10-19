import React from "react"
import Text from "../field/Text"
import { Container, Contact, CopyRight, Subscription } from "./style"
import Social from "../social"

const Footer = () => {
  return (
    <Container>
      <Contact>
        <h3>Thank you</h3>
        <p>
          Hello thank you for the visit if you like my website and you want to
          see more staff about me please follow me in social media
        </p>
        <Social />
      </Contact>

      <Subscription>
        <h3>Join the Newsletter</h3>
        <p>Please subscribe to our web site to see all new stuff</p>
        <Text
          name="subscribe"
          buttonInside={true}
          placeholder="yourname@gmail.com"
          buttonText="Subscribe"
        />
      </Subscription>
      <CopyRight>
        <p>© 2020 Hamza Miloud Amar. All Rights Reserved</p>
      </CopyRight>
    </Container>
  )
}
export default Footer
