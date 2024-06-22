import * as React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/assets/styles/theme";
import GlobalStyle from "./src/assets/styles/globalStyles";

import "./src/assets/fonts/fonts.css";
// import "./src/style.css";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {element}
  </ThemeProvider>
);
