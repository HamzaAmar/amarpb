import styled from "@emotion/styled"

export const Container = styled.footer`
  display: grid;
  grid-template-areas: "contact subscription" "copyright copyright";
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin-top: 1rem;
  box-shadow: var(--color-shadow);
  background: var(--color-background-main);
  @media (max-width: 600px) {
    grid-template-areas: "contact" "subscription" "copyright";
  }
`

export const Subscription = styled.div`
  grid-area: subscription;
  padding: 2rem 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: var(--color-background-main);
  filter: brightness(1.5);
  h3 {
    font-weight: 700;
  }
  label {
    display: block;
  }
  input {
    width: 100%;
    height: 2rem;
    background: var(--color-background-dark);
    outline: none;
  }
`
export const Contact = styled.div`
  grid-area: contact;
  padding: 2rem 0.2rem;
  background: var(--color-background-main);
  backdrop-filter: brightness(0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    width: 80%;
    margin: 1rem auto;
  }
`

export const CopyRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  grid-area: copyright;
  background: var(--color-background-light);
  padding: 1rem;
  /* width: 100%; */
`
