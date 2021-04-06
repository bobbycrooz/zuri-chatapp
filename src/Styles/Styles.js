import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
  }

  body {
      color: ${({theme}) => theme.primary};
      background-color: #fff;
      font-family: 'Poppins', sans-serif;
    transition: all 0.25s linear;
    font-size:16px;
  }
`