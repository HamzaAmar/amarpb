import { css } from "@emotion/core"

export const globalStyle = () => css`
  @import url("https://fonts.googleapis.com/css2?family=Hepta+Slab:wght@1..900&display=swap");
  :root {
    --spacing-sm: 0.5rem;
    --spacing-md: 2rem;
    --spacing-lg: 4rem;
    --shared-value: 5rem;
  }
  @media (max-width: 410px) {
    :root {
      --spacing-sm: 0.25rem;
      --spacing-md: 1rem;
      --spacing-lg: 2rem;
    }
  }
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  html {
    font-size: calc(12px + (20 - 12) * ((100vw - 400px) / (1800 - 400)));
  }
  body {
    box-sizing: border-box;
    color: var(--color-text);
    background-color: var(--color-background-main);
    -webkit-font-smoothing: antialiased;
    font-family: "Hepta Slab", sans-serif;
    font-weight: 300;

    &::-webkit-scrollbar {
      width: 0.7rem;
      border-radius: 5px;
    }

    &::-webkit-scrollbar-track {
      background: linear-gradient(
        to right,
        var(--color-primary-dark),
        var(--color-primary-light),
        var(--color-primary-dark)
      );
      box-shadow: 0 0 10px 1px inset black;
    }

    &::-webkit-scrollbar-thumb {
      background: linear-gradient(
        to right bottom,
        var(--color-primary-light),
        var(--color-primary-dark),
        var(--color-primary-light),
        var(--color-primary-light),
        var(--color-primary-dark),
        var(--color-primary-light),
        var(--color-primary-light),
        var(--color-primary-dark),
        var(--color-primary-light),
        var(--color-primary-light),
        var(--color-primary-dark),
        var(--color-primary-light)
      );
      outline: 1px solid slategrey;
      border-radius: 6px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(
        to right bottom,
        var(--color-primary-dark),
        var(--color-primary-light),
        var(--color-primary-light),
        var(--color-primary-dark),
        var(--color-primary-light),
        var(--color-primary-light),
        var(--color-primary-dark),
        var(--color-primary-light),
        var(--color-primary-light),
        var(--color-primary-dark),
        var(--color-primary-light),
        var(--color-primary-light),
        var(--color-primary-dark)
      );
    }
  }
  body.light {
    --color-background-main: #fdfdfd;
    --color-background-light: #ffffff;
    /* --color-primary-light: #7b0dbf; */
    --color-primary-light: #9154b7;
    --color-primary-main: #653a80;
    --color-primary-dark: #482a5b;
    --color-text: #060803;
    --hr: hsla(0, 50%, 0%, 0.2);
    --color-shadow: 0 0 5px 1px var(--hr);
    --form-shadow: 0 2px 15px 0 rgba(210, 214, 220, 0.5);
  }

  body.dark {
    --color-background-main: #02010a;
    --color-background-light: #06031c;
    --color-primary-light: #b759ee;
    --color-primary-main: #a734ea;
    --color-primary-dark: #69109d;
    --color-secondary: rgb(249, 250, 251);
    --color-text: #fef;
    --hr: hsla(0, 30%, 100%, 0.2);
    --color-shadow: 0 0 15px 1px var(--hr);
    --form-shadow: 0 2px 15px 0 rgba(26, 26, 27, 0.637);
  }

  a {
    text-decoration: none;
    color: var(--color-text);
    font-variation-settings: "wght" 400;
  }
  ul {
    list-style: none;
    font-weight: 400;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Hepta Slab", sans-serif;
    font-weight: 300;
  }

  code {
    padding: 2px 4px;
    background: #f4f3fa;
    color: red;
    border-radius: 3px;
  }
  a {
    code {
      color: red;
    }
  }
  pre {
    background-color: #061526;
    border-radius: 4px;
    font-size: 16px;
    padding: 10px;
    overflow-x: auto;
    /* Track */
    ::-webkit-scrollbar {
      width: 100%;
      height: 5px;
      border-radius: 0 0 5px 5px;
    }
    ::-webkit-scrollbar-track {
      background: #061526;
      border-radius: 0 0 4px 4px;
      border: 1px solid rgba(0, 0, 0, 0.2);
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 5px;
    }
  }
  blockquote {
    border-right: unset;
    border-left: 0.32813rem solid red;
    padding-left: 1.42188rem;
    padding-right: unset;
    margin-right: 0.75rem;
    margin-left: -1.75rem;
  }
  .highlight-line {
    background-color: rgba(201, 167, 255, 0.2);
    margin: 0 -10px;
    padding: 0 5px;
    border-left: 5px solid #c9a7ff;
  }

  p {
    font-family: "Hepta Slab", serif;
    font-weight: 300;
    line-height: 1.65;
  }
`
