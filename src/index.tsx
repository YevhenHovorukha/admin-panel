import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { StyledEngineProvider, GlobalStyles } from "@mui/material";

import App from "./App";

const globalStyles = {
  "*": {
    margin: 0,
    boxSizing: "border-box",
    fontFamily: "Mulish, Roboto, sans-serif",
  },
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StyledEngineProvider injectFirst>
    <GlobalStyles styles={globalStyles} />
    <App />
  </StyledEngineProvider>
);
