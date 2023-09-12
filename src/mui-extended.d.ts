import "@mui/material";

declare module "@mui/material" {
  interface TypographyPropsVariantOverrides {
    inputLabel: true;
    authMainText: true;
    authAdditionalText: true;
    authLogoText: true;
  }
}
