import { createTheme, Theme } from "@mui/material/styles";

const THEME: Theme = createTheme({
  palette: {
    primary: {
      main: "#3751FF",
    },
  },
  typography: {
    fontFamily: "Mulish, Roboto, sans-serif",
  },

  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          marginRight: "-8px",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        contained: {
          marginTop: "24px",
          height: "48px",
          width: "100%",
          borderRadius: "8px",
          textTransform: "none",
        },
      },
    },
  },
});

export default THEME;
