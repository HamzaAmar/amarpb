import styled from "@emotion/styled"
import { keyframes } from "@emotion/core"

const animation = keyframes`
  0{
    transform:translate(-100%, -100%);
  }
  50%{
    transform:translate(10%, 10%);

  }
  100%{
    transform:translate(-10%, -10%);

  }
`
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
  justify-content: space-between;
  height: calc(100vh - 5rem);
  width: 100%;

  @media (max-width: 800px) {
    display: flex;
    height: calc(100vh - 5rem);
    width: 100%;
    flex-direction: column;
    justify-content: flex-end;
    align-content: center;
  }
`

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.7;
  flex: 1 1 50%;

  @media (max-width: 800px) {
    width: 100%;
    padding: 1rem;
  }
`

export const Name = styled.h3`
  font-size: 2rem;
  word-spacing: 5px;
  letter-spacing: 1px;
  color: transparent;
  background: -webkit-linear-gradient(
    var(--color-primary-light),
    var(--color-primary-dark)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;

  @media (max-width: 468px) {
    font-size: 1.4rem;
    word-spacing: 1px;
    font-weight: 800;
  }
`

export const NavList = styled.ul`
  display: flex;
  li {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    margin: 1rem;
    cursor: pointer;
    position: relative;
    box-shadow: var(--color-shadow);
    z-index: 1;
    overflow: hidden;

    ::before {
      content: "";
      background: var(--color-primary-main);
      position: absolute;
      top: 0;
      left: 0;
      width: 120%;
      height: 120%;
      border-radius: 30%;
      /* transform: rotate(45deg) translateX(-40%) translateY(30%); */
      transform: rotate(45deg) translate(-120%, 0);
      z-index: -1;
    }
    &:hover::before {
      animation: ${animation} 1s 1 forwards;
    }
    &:hover svg {
      fill: var(--color-background);
    }
  }
`
export const Text = styled.p`
  word-spacing: 2px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 0.8rem;
  width: 65%;
  line-height: 2;
  justify-self: center;

  @media (max-width: 800px) {
    width: 100%;
    word-spacing: 0;
    letter-spacing: 1px;
    font-size: 0.8rem;
  }
`

export const ImageWrapper = styled.div`
  height: 25rem;
  width: 25rem;
  border-radius: 50%;
  position: relative;
  flex: 1 1 50%;

  ::before {
    content: "";
    position: absolute;
    top: -20%;
    left: -20%;
    width: 100%;
    background: var(--color-primary-light);
    /* background: brown; */
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
    height: 15rem;
    width: 15rem;
  }
`
