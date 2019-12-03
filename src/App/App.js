import React from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "./theme";
import { Provider } from "react-redux";
import configureStore from "../store/store";
import Form from "../components/Form/Form";

const store = configureStore();

export default () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Form />
    </ThemeProvider>
  </Provider>
);
