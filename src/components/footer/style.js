import styled from "@emotion/styled"

export const Container = styled.footer`
  display:grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows:2fr 1fr;
  grid-auto-rows:1fr;

  @media (max-width:800px){
    grid-template-columns: 2fr 1fr;
    grid-template-rows:1fr 1fr;
    padding-bottom:5rem;

  }
  @media (max-width:600px){
    grid-template-columns: 1fr;
  }
`

export const Contact = styled.div`
  display:grid;
`
