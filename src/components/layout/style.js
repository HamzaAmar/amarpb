import styled from "@emotion/styled"

export const Content = styled.section``
export const SearchContainer = styled.div`
  visibility: ${({ search }) => (search ? "visible" : "hidden")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: red;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 10000;
  transform: ${({ search }) =>
    search ? "translateY(0)" : "translateY(-100%)"};
  transition: transform 1s;
`
