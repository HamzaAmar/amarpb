import styled from "@emotion/styled"

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5rem;

  @media (max-width: 468px) {
    grid-template-columns: 1fr;
  }
`

export const Service = styled.div`
  /* width: 40%; */
  /* padding: 2rem 0.2rem; */
  background-color: var(--color-background);
  border-radius: 10px;
  margin: 1rem 0.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: var(--color-shadow);
  min-width: 350px;

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
