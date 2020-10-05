import React from "react"
import { css } from "@emotion/core"
// import SubscribeForm from "./forms/subscribe"
// import Container from "./container"
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineRadiusSetting,
} from "react-icons/ai"

import { Container } from "./style"

const Footer = () => (
  <footer
    css={css`
      background: var();
      color: white;
      margin-top: 70px;
    `}
  >
    <Container
      css={css`
        padding-top: 0;
        padding-bottom: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
      `}
    >
      {/* {subscribeForm ? (
        <div css={{ marginTop: -40 }}>
          {subscribeForm}
          <br />
          <br />
        </div>
      ) : null} */}
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          div,
          img {
            margin: 50px 0;
          }
        `}
      >
        <div>
          <AiOutlineTwitter />
          <AiOutlineGithub />
          <AiOutlineLinkedin />
          <AiOutlineRadiusSetting />
        </div>
      </div>
    </Container>
  </footer>
)

export default Footer
