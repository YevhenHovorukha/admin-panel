import { Box, Typography } from "@mui/material";
import styled from "styled-components";

import { THEME } from "../../theme";

export const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  gap: 12px;
  width: 258px;
  height: 134px;
  border-radius: 8px;
  border: 1px solid ${THEME.COLORS.LIGHT_GRAY};
  background: ${THEME.COLORS.WHITE};
  cursor: pointer;
  &:hover {
    border-color: ${THEME.COLORS.MAIN_BLUE};
  }
  &:hover p {
    color: ${THEME.COLORS.MAIN_BLUE};
  }
`;

export const InfoTitle = styled(Typography)`
  color: ${THEME.COLORS.GRAY};
  font-size: ${THEME.SIZES.FONT.SEMI_BIG};
  font-weight: ${THEME.FONTS.WEIGHT.W700};
  letter-spacing: ${THEME.SIZES.LETTER_SPACING.LS04};
`;

export const InfoValue = styled(Typography)`
  color: ${THEME.COLORS.BLACK};
  font-size: ${THEME.SIZES.FONT.LARGE};
  font-weight: ${THEME.FONTS.WEIGHT.W700};
  line-height: normal;
  letter-spacing: ${THEME.SIZES.LETTER_SPACING.LS1};
`;
