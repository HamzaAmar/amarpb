import React from "react"
import styled from "@emotion/styled"
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  margin: 2rem 1rem;
  background: var(--color-background);
  filter: brightness(1.2);
  width: 90vw;
  /* height: 100vh; */

  box-shadow: 0 0 10px black;
`

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  form {
    width: 90%;
    div {
      width: 100%;
      margin: 2rem;
      display: flex;
      flex-direction: column;
      label {
        font-size: 0.9rem;
        letter-spacing: 1px;
        font-weight: bold;
        margin-bottom: 0.5rem;
      }
      input,
      textarea {
        border: none;
        width: 100%;
        padding: 0.4rem;
        background-color: var(--color-background-light);
        border-bottom: var(--color-background) 2px solid;

        color: var(--color-text);
        letter-spacing: 1px;
        font-size: 1.04rem;
      }
      input:focus,
      textarea:focus {
        border-bottom: var(--color-primary-main) 2px solid;
        outline: none;
      }
    }
  }
`
const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem 4rem;
  img {
    border-radius: 50%;
  }
  p {
    width: 70%;
    margin: 1rem 0;
    font-size: 0.8rem;
    text-transform: uppercase;
    line-height: 1.7;
    font-weight: bold;
    letter-spacing: 1px;
    word-spacing: 2px;
  }
  ul {
    width: 300px;
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
`

const contact = () => {
  return (
    <>
      <Container>
        <AboutContainer>
          <img src="https://picsum.photos/id/300/300/300" alt="hello" />
          <p>
            Hello if you wanna contact me to discue bout something please choose
            the simplest way you like and good day
          </p>
          <div>
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
          <h1>Contact Me</h1>
          <form>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="" id="name" />
            </div>
            <div>
              <label htmlFor="name">Email</label>
              <input type="text" name="" id="name" />
            </div>
            <div>
              <label htmlFor="name">Subject</label>
              <input type="text" name="" id="name" />
            </div>
            <div>
              <label htmlFor="name">Subject</label>
              <textarea rows="8" type="text" name="" id="name"></textarea>
            </div>
          </form>
        </FormContainer>
      </Container>
    </>
  )
}

export default contact
