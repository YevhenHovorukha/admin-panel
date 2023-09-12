import { createTheme, Theme } from "@mui/material/styles";

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: "#3751FF",
    },
  },
  typography: {
    fontFamily: "Mulish, Roboto, sans-serif",
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          "@media (min-width: 1200px)": {
            maxWidth: "none",
          },
          "@media (min-width: 600px)": {
            paddingLeft: "0",
            paddingRight: "0",
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          marginTop: "6px",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          height: "42px",
          padding: "0",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          marginRight: "-8px",
        },
      },
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: "inputLabel" },
          style: {
            display: "block",
            marginTop: "24px",
            color: "#9FA2B4",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "0.3px",
            textTransform: "uppercase",
          },
        },
      ],
    },
  },
});

export default theme;
