import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    primary: "orange"
  },
  breakpoints: {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  },
  shadows: {
    normal: `0 0 2px 2px rgba(0,0,0,0.08), 2px 2px 10px 4px rgba(0,0,0,0.16)`
  }
};

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    font-family: "Roboto", sans-serif;
  }
`;
