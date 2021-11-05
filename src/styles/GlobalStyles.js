import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    box-sizing: border-box;
    padding: 0;
    list-style: none;
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-size: 1.15rem;
  }
`
