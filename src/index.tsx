import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import { StyledEngineProvider, GlobalStyles } from "@mui/material";

import App from "./App";
import theme from "./theme";

const globalStyles = {
  "*": { margin: 0, boxSizing: "border-box" },
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={globalStyles} />
      <App />
    </ThemeProvider>
  </StyledEngineProvider>
);
