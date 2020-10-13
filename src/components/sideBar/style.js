import styled from "@emotion/styled"

export const NavList = styled.nav`
  min-width: var(--shared-value);
  width: var(--shared-value);
  height: 100vh;
  position: sticky;
  z-index: 1000;
  right: 0;
  top: 0;
  background: var(--color-background-main);
  transition: width 0.3s;
  & > :hover {
    width: 10rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    align-items: center;
  }
  @media (max-width: 468px) {
    position: fixed;
    width: 100vw;
    height: var(--shared-value);
    top: calc(100% - var(--shared-value));
    left: 0;

    ul {
      flex-direction: row;
    }
  }
`
