import styled from "@emotion/styled"

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
`

export const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: var(--color-background-light);
  flex-direction: column;
  transform: translateY(-101%);
  transition: transform 500ms;
`

export const Card = styled.div`
  width: calc(100% * 1 / 3 - 2rem);
  margin: 1rem;
  border-radius: 3rem;
  overflow: hidden;
  position: relative;
  }

  @media (max-width: 468px) {
    width: calc(100% - 2rem);
    margin: 1rem;
    border-radius: 0;
  }
`
export const Image = styled.img`
  width: 100%;
  object-fit: cover;
`

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
`
