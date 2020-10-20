import styled from "@emotion/styled"
import { Link } from "gatsby"

export const Title = styled.h1`
  font-size: 1.6rem;
  letter-spacing: 2px;
  font-weight: 700;
`

export const Articles = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: auto;
  grid-gap: 1.5rem;
  padding: 1rem 2rem;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (max-width: 600px) {
    padding: 1rem;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  background: var(--color-background);
  filter: brightness(0.9);
  min-width: 250px;
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
  padding: 1rem 0;
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10ch, 1fr));
    grid-gap: 1rem;
    width: 100%;

    li {
      font-size: 0.5rem;
      letter-spacing: 1px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      padding: 0.3rem;
      background: var(--color-primary-light);
      border-radius: 5px;
      cursor: pointer;
      box-shadow: var(--color-shadow);

      &:hover {
        box-shadow: none;
      }
    }
  }
`

export const Href = styled(Link)`
  margin-left: auto;
  letter-spacing: 2px;
  font-size: 1.2rem;
  text-transform: uppercase;
  padding-bottom: 0.4rem;
  font-weight: 100;
  font-family: sans-serif;
  vertical-align: middle;
  text-align: end;

  background: linear-gradient(
    to bottom,
    var(--color-primary-light),
    var(--color-primary-dark),
    var(--color-primary-dark),
    var(--color-primary-light)
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  :hover {
    border-bottom: 2px solid var(--color-primary);
  }
`
