import { createGlobalStyle } from 'styled-components'
import { vars } from './vars'

export const GlobalStyles = createGlobalStyle`
html {
  box-sizing: border-box;
  font-size: 62.5%;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
body {
  min-height: 100vh;
  font-family: ${vars.fontFamily};
  font-size: 2rem;
  background-color: ${vars.backgroundColor};
  color: ${vars.colorWhite};
}

img {
  max-width: 100%;
  width: 100%;
}

ul {
  list-style: none;
}

ul,
ol,
li,
h2 {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

/* Custom Scrolls */
::-webkit-scrollbar {
    width: 7px;
  }
    
  ::-webkit-scrollbar-thumb {
    background: #00FFB2;
    border-radius: 5px;
  }
  /* Custom Scrolls */
`
