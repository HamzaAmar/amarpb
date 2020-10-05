import styled from "@emotion/styled"
import { Link } from "gatsby"

export const Title = styled.h1`
  font-size: 1.6rem;
  letter-spacing: 2px;
  font-weight: 700;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  background: var(--color-background);
  filter: brightness(0.9);
  min-width: 300px;
  width: 100%;
  min-height: 200px;
  border-radius: 1rem;
  justify-content: space-evenly;
  box-shadow: var(--color-shadow);

  &:hover > ${Title} {
    color: var(--color-primary);
  }
`

export const Text = styled.p`
  margin: 0.5rem 0;
`

export const Date = styled.p`
  font-size: 0.75rem;
  margin: 0 1rem 1rem 0;
  font-style: italic;
`
export const Nav = styled.nav`
  ul {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    li {
      font-size: 0.5rem;
      letter-spacing: 1px;
      text-transform: uppercase;
      padding: 0.3rem 0.6rem;
      margin: 1rem 0;
      background: var(--color-primary-light);
      border-radius: 5px;
      cursor: pointer;
      box-shadow: var(--color-shadow);

      &:hover {
        box-shadow: none;
      }
      &:not(: first-child) {
        margin-left: 2rem;
      }
    }
  }
`

export const Href = styled(Link)`
  letter-spacing: 2px;
  font-size: 0.9rem;
  text-transform: uppercase;
  width: 30%;
  display: inline-block;
  padding-bottom: 0.4rem;
  font-weight: 100;
  font-family: sans-serif;
  :hover {
    border-bottom: 2px solid var(--color-primary);
  }
`
