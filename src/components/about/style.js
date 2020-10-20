import styled from "@emotion/styled"

// const opacity = keyframes`
//   0%{
//     opacity:1;
//   }
//   50%{
//     opacity:0.8;
//   }
//   100%{
//     opacity:1;
//   }
// `

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  height: calc(100vh - 5rem);
  padding-top: 1rem;

  @media (max-width: 800px) {
    flex-direction: column;
    width: 100%;
    padding: 1rem;
    margin: auto;
  }
`

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.7;
  flex: 1 1 50%;
  /* width: 100%; */
  display: flex;
  align-items: center;
`

export const Name = styled.h3`
  font-size: 2rem;
  word-spacing: 8px;
  letter-spacing: 2px;
  color: transparent;
  background: -webkit-linear-gradient(
    var(--color-primary-light),
    var(--color-primary-dark)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 850;

  @media (max-width: 600px) {
    font-size: 1.4rem;
    word-spacing: 1px;
    font-weight: 800;
  }
`

export const Text = styled.p`
  word-spacing: 2px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 0.8rem;
  width: 90%;
  line-height: 2;
  justify-self: center;
`

export const ImageWrapper = styled.div`
  flex: 0 0 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    height: 20rem;
    width: 20rem;
    border-radius: 50%;
    position: relative;
  }

  & > div::before {
    content: "";
    position: absolute;
    top: -3rem;
    left: -3rem;
    width: 100%;
    background: var(--color-primary-light);
    height: 100%;
    border-radius: 30% 40% 30% 40% / 60% 30% 60% 30%;
    box-shadow: 0 0 100px inset var(--color-primary-dark);
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 30% 40% 30% 40% / 60% 30% 60% 30%;
  }

  @media (max-width: 800px) {
    order: -1;
    flex: 1 1 100%;
    width: 100%;
    margin-bottom: auto;
    display: flex;
    align-items: center;
    div {
      height: 17rem;
      width: 17rem;
    }
  }
`
