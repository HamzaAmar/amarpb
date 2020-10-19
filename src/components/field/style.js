import styled from "@emotion/styled"

export const FormItem = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  input,
  textarea {
    border: none;
    width: 100%;
    padding: 0.4rem;
    background-color: var(--color-background-dark);
    border-bottom: var(--color-background-main) 2px solid;

    color: var(--color-text);
    letter-spacing: 1px;
    font-size: 1.04rem;
    border-left: var(--color-primary-main) 2px solid;
    border-right: var(--color-primary-main) 2px solid;
    border-bottom: var(--color-background-main) 2px solid;
    box-shadow: var(--color-shadow);
  }
  input:focus,
  textarea:focus {
    border-bottom: var(--color-primary-main) 2px solid;
    outline: none;
  }
`

export const ErrorContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0.5rem 0;
  width: 100%;

  small {
    /* margin-left: 2rem; */
    font-size: 0.8rem;
  }

  h1 {
    font-size: 1rem;
  }
`

export const Container = styled.div`
  width: 90%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const InsideButton = styled.div`
  position: relative;
  height: 2.5rem;

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 0.85rem;
  }
  button {
    position: absolute;
    top: 50%;
    right: 0.5rem;
    transform: translateY(-50%);
    padding: 0 0.5rem;
    height: calc(100% - 1rem);
    display: flex;
    align-items: center;
    background: var(--color-primary-dark);
    color: white;
    z-index: 5;
    outline: none;
    border: none;

    :hover {
      background: var(--color-primary-light);
    }
  }
`
