import { Box, Typography, Icon } from "@mui/material";
import styled from "styled-components";

import { THEME } from "../../theme";

export const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const StyledLogoIcon = styled(Icon)`
  width: 48px;
  height: 48px;
`;

export const StyledLogoText = styled(Typography)`
  height: 24px;
  color: ${THEME.COLORS.GRAY};
  font-size: ${THEME.SIZES.FONT.SEMI_BIG};
  font-weight: ${THEME.FONTS.WEIGHT.W700};
  letter-spacing: ${THEME.SIZES.LETTER_SPACING.LS04};
`;

export const StyledMainText = styled(Typography)`
  margin: 32px auto 0;
  height: 30px;
  color: ${THEME.COLORS.BLACK};
  font-size: ${THEME.SIZES.FONT.BIG};
  font-weight: ${THEME.FONTS.WEIGHT.W700};
  letter-spacing: ${THEME.SIZES.LETTER_SPACING.LS03};
`;

export const StyledAdditText = styled(Typography)`
  margin: 12px auto 0;
  color: ${THEME.COLORS.GRAY};
  font-size: ${THEME.SIZES.FONT.MEDIUM};
  font-weight: ${THEME.FONTS.WEIGHT.W400};
  line-height: ${THEME.SIZES.LINE_HEIGHT.LH20};
  letter-spacing: ${THEME.SIZES.LETTER_SPACING.LS03};
`;
