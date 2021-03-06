import styled from "@emotion/styled"

export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`
export const Skill = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  background: var(--color-background-main);
  width: 100%;
  height: 100%;
  margin: 1rem 0;
  padding: 1rem 2rem;
  box-shadow: var(--color-shadow);

  svg {
    font-size: 5rem;
  }

  h2 {
    font-weight: 200;
    letter-spacing: 1px;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
  }
  li {
    width: calc(100% * 1 / 3 - 2rem);
    margin: 1rem;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    margin: 0.4rem 0;
    padding: 0.3rem 0.6rem;
    svg {
      width: 3rem;
      height: 3rem;
    }
    h2 {
      font-weight: 700;
      font-size: 1rem;
      letter-spacing: 0;
    }
    ul {
      display: flex;
      align-items: space-between;
      justify-content: flex-start;
      flex-wrap: wrap;
      li {
        width: calc(100% * 1 / 2 - 1rem);
        margin: 0.5rem;
      }
    }
  }
`

export const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 1rem;
  background: var(--color-background-light);
  border-radius: 39px;
  height: 100%;
  min-width: 8.5rem;
  svg {
    margin: 1rem 0;
    padding: 0.3rem;
  }

  h2 {
    font-weight: 200;
    letter-spacing: 1px;
  }
  h4 {
    font-weight: 700;
    letter-spacing: 1px;
    font-style: italic;
  }
  @media (max-width: 800px) {
    padding: 1rem;

    h2 {
      font-weight: 200;
      font-size: 1.1rem;
    }
    h4 {
      font-weight: 600;
      font-style: italic;
    }
  }
`
