import { Box, Typography } from "@mui/material";
import styled from "styled-components";

import { THEME } from "../../theme";

export const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 32px;
  width: 100%;
  height: 109px;
  gap: 6px;
  border-bottom: 1px solid ${THEME.COLORS.LIGHT_GRAY};
`;

export const MainText = styled(Typography)`
  color: ${THEME.COLORS.GRAY};
  font-size: ${THEME.SIZES.FONT.REGULAR};
  font-weight: ${THEME.FONTS.WEIGHT.W600};
  line-height: ${THEME.SIZES.LINE_HEIGHT.LH22};
  letter-spacing: ${THEME.SIZES.LETTER_SPACING.LS03};
`;

export const ValueText = styled(Typography)`
  color: ${THEME.COLORS.BLACK};
  font-size: ${THEME.SIZES.FONT.SEMI_BIG};
  font-weight: ${THEME.FONTS.WEIGHT.W700};
  letter-spacing: ${THEME.SIZES.LETTER_SPACING.LS03};
`;
