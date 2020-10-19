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
