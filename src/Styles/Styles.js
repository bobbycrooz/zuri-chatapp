import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *,
  *:after,
  *:before{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
  }

  body {
      color:black;
      display:flex;
      justify-content:center;
      position:absolute;
      width:100%;
      height:100vh;
         font-family: 'Poppins', sans-serif;
    transition: all 0.25s linear;
    font-size:16px;
    /* position:relative; */
    overflow-y:hidden;

  }
`