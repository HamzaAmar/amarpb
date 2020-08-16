import styled from "@emotion/styled"

export const Container = styled.div`
  margin: 1rem;
  text-align: center;
  border: #aaa;
  padding: 1rem;
  background-color: var(--color-primary);
  filter: brightness(1.1);
  border-radius: 10px;
`

export const Input = styled.input`
  width: 60%;
  padding: 1rem;
  outline: none;
`

export const Heading = styled.h1`
  letter-spacing: 2px;
  padding-bottom: 4px;
  position: relative;
  background: red;
  display: inline-block;

  ::after {
    width: 100%;
    height: 3px;
    content: "";
    margin-left: calc(50%);
    margin-top: 5px;
    transform: translateX(-50%);
    background-color: white;
    position: absolute;
    top: calc(100% + 1rem);
    left: 0;
  }
`

export const Button = styled.button`
  padding: 0.8rem 1.6rem;
  background: transparent;
  color: var(--color-text);
  outline: none;
  border-radius: 10px;
  border: 10px solid var(--color-primary-dark);
  background: var(--color-primary-light);
  transition: background 300ms ease-out;
  border-width: 3px;
  border-radius: 10px;
  box-shadow: var(--color-shadow);

  :hover {
    background-position: left bottom;
    color: var(--color-background);
    transform-origin: left;
    background: var(--color-primary-main);
  }
`

export const Text = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  font-style: italic;
  letter-spacing: 2px;
  font-variant: small-caps;
  padding: 1rem;
`
