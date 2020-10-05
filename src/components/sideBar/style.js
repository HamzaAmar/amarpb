import styled from "@emotion/styled"

export const NavList = styled.nav`
  height: 100vh;
  position: fixed;
  z-index: 1000000000000000000;
  left: 0;
  bottom: 0;
  width: var(--sidebar-width);
  background: var(--color-background-main);
  transition: transform 0.3s;
  grid-area: sidebar;
  :hover {
    transform: scaleX(2.5);
  }

  @media (max-width: 468px) {
    width: 100vw;
    height: 4rem;
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    align-items: center;
  }
`
