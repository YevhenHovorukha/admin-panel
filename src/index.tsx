import ReactDOM from "react-dom/client";
import { StyledEngineProvider, GlobalStyles } from "@mui/material";

import App from "./App";
import { THEME } from "./theme";

const globalStyles = {
  "*": {
    margin: 0,
    boxSizing: "border-box",
    fontFamily: THEME.FONTS.REGULAR,
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
