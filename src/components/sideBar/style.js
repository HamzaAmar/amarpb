import styled from "@emotion/styled"

export const ListItem = styled.span`
   display:flex;
  align-items:center;
 justify-content:center;
  height:5rem;
  transition: opacity 400ms ease;
  position:relative;
  :hover{
    background: var(--color-background-light);
  ::before{
    content:'';
    position:absolute;
    top:0;
    right:0;
    background:linear-gradient(to bottom, var(--color-primary-dark), var(--color-primary-light));
    width:4px;
    height:100%;
  }
}

@media (max-width: 600px){
  h3{
    display:none;
  }
 :hover{
  ::before{
    content: none;
  }
 }
}

  h3{
    display:block;
    opacity:1;
    transform:translateX(20rem);
    transition: opacity 600ms ease, transform 600ms ease;

  }

  svg{
    min-width:2rem;
    margin: 0 1.5rem;
  }
` 

export const NavList = styled.ul`
  flex-shrink:0;
  flex-basis:5rem;
  width: var(--shared-value);
  overflow:hidden;
  display:flex;
  flex-direction:column;
  background: var(--color-background-main);
  position: fixed;
  z-index: 1000000000000000000000000000000;
  height: 100%;
  left: 0;
  top: 5rem;
  transition: width 300ms ease;


  :hover {
    width:15rem;
    li{
      justify-content:space-evenly;
    }
    ${ListItem}{
      h3{
        opacity:1;
        transform:translateX(0)
      }
    }
  }

  @media (max-width: 600px){
    flex-direction:row;
    width: 100vw;
    left: 0;
    top: calc(100% - 5rem);
    height:5rem;
    :hover{
      width:inherit;
      ${ListItem}{
      h3{
        opacity:0;
        transform:none;
      }
    }
    }
  
  }
`

