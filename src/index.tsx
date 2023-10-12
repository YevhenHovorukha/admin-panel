import ReactDOM from "react-dom/client";
import {
  StyledEngineProvider,
  GlobalStyles,
  ThemeProvider,
  createTheme,
} from "@mui/material";

import App from "./App";
import { THEME } from "./theme";

export const theme = createTheme({
  typography: {
    fontFamily: THEME.FONTS.REGULAR,
  },
});

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
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={globalStyles} />
      <App />
    </ThemeProvider>
  </StyledEngineProvider>
);
