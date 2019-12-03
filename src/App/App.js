import React from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "./theme";
import Form from "../components/Form/Form";

export default () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Form />
  </ThemeProvider>
);
