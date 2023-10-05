import { TextField, Typography } from "@mui/material";
import styled from "styled-components";

import { THEME } from "../../../theme";

export const StyledTextField = styled(TextField)`
  padding: 0;
  margin-top: 6px;
  height: 42px;
  width: 100%;

  input[type="date"] {
    color: ${THEME.COLORS.BLACK};
  }

  input[type="date"]::-webkit-calendar-picker-indicator {
    filter: invert(0.7);
  }

  input {
    height: 42px;
    padding: 0 16px;
  }
`;

export const StyledLabel = styled(Typography)`
  display: block;
  color: ${THEME.COLORS.GRAY};
  font-size: ${THEME.SIZES.FONT.SMALL};
  font-weight: ${THEME.FONTS.WEIGHT.W700};
  height: 16px;
  letter-spacing: ${THEME.SIZES.LETTER_SPACING.LS03};
  text-transform: uppercase;
`;
