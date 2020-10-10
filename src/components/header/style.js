import styled from "@emotion/styled"
import { css } from "@emotion/core"

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 4.5rem;
  padding: 0 3rem;
  position: relative;
  z-index: 10000000000;
  background: var(--color-background-main);
  box-shadow: var(--color-shadow);
  grid-area: header;

  @media (max-width: 468px) {
    margin-left: 0;
    padding: 0 1rem;
  }
`

export const MenuContainer = styled.div`
  margin-left: 4rem;
  position: absolute;
  background: var(--color-primary-main);
  top: 4rem;
  width: calc(100vw - 5rem);
  height: calc(100vh - 5rem);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 2rem 0;
  flex-wrap: wrap;
  z-index: 100;
  transform: ${({ visible }) =>
    visible ? "translateY(0)" : "translateY(-120%)"};
  transition: transform 200ms;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;
    background: var(--color-primary-main);
    left: 0;
    transform: ${({ visible }) =>
      visible ? "translateX(0)" : "translateX(-120%)"};
    transition: transform 300ms linear 500ms;
    filter: opacity(1);
  }
  &::after {
    left: 50%;
    transform: ${({ visible }) =>
      visible ? "translateX(0)" : "translateX(120%)"};
    transition: transform 300ms linear 500ms;
  }
`

export const Menu = styled.div`
  background: var(--color-primary-main);
  width: 1.6rem;
  height: 2.5px;
  position: relative;
  border-radius: 3px;
  transform: ${({ visible }) =>
    visible ? "translateX(3rem)" : "translateX(0)"};
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: -7px;
    right: 0;
    background: var(--color-primary-main);
    width: 1.9rem;
    height: 100%;
    border-radius: 3px;
    transform: ${({ visible }) =>
      visible ? "translate(-3rem, -130%) rotate(45deg)" : "translateX(0)"};
    transform-origin: left;
    transition: transform 1s;
  }
  &::after {
    top: 7px;
    transform: ${({ visible }) =>
      visible ? "translate(-3rem,100%) rotate(-45deg)" : "translateX(0)"};
  }
`

export const Nav = styled.nav`
  align-self: stretch;
  position: relative;
  flex: 1 1 15rem;

  ul {
    display: flex;
    justify-content: space-evenly;
    font-size: 0.86rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (max-width: 600px) {
    display: ${({ visible }) => (visible ? "block" : "none")};
    transform: ${({ visible }) =>
      visible ? "translateY(0)" : "translateY(-100%)"};
    transition: transform 100ms;
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    z-index: 100;
    height: calc(100vh - 5rem);
    background: var(--color-background-main);
    ul {
      flex-direction: column;
      align-items: center;
    }
  }
`

export const logoContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  width: 100px;

  @media (max-width: 600px) {
    width: 70%;
    min-width: 100px;
  }
`

export const Logo = styled.h1`
  letter-spacing: 4px;
  font-size: 1.8rem;
  color: var(--color-primary-main);
  text-transform: uppercase;
  transform: skew(10);
  text-shadow: var(--color-text);
  font-weight: 900;

  @media (max-width: 468px) {
    letter-spacing: 2px;
    font-size: 1.4rem;
  }
`

export const NavItem = styled.li`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;

  :hover::after {
    transform: scale(1);
    transition: transform 0.6s;
    transform-origin: right;
  }
  &::after {
    content: "";
    position: absolute;
    top: 95%;
    left: 0;
    background: linear-gradient(
      to right,
      var(--color-primary-dark),
      var(--color-primary-light)
    );
    width: 101%;
    height: 3px;
    transform: scale(0);
    border-radius: 3px;
    ${({ active }) => active && ` transform: scale(1)`}
  }
`
