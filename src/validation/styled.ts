import { Typography } from "@mui/material";
import styled from "styled-components";

import { THEME } from "../theme";

export const ErrorValidationText = styled(Typography)`
  margin-top: 4px;
  color: ${THEME.COLORS.RED};
  font-size: ${THEME.SIZES.FONT.MEDIUM};
  font-weight: ${THEME.FONTS.WEIGHT.W400};
  letter-spacing: ${THEME.SIZES.LETTER_SPACING.LS03};
`;
