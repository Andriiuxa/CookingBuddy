import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import Home from "./Pages/Home";
import theme from "./CustomProperties/Theme";

export default () => (
  <PaperProvider theme={theme}>
    <Home />
  </PaperProvider>
);
