import { Box, Typography } from "@mui/material";
import styled from "styled-components";

import { THEME } from "../../../theme";

export const CellTextBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const CellTextTitle = styled(Typography)`
  color: ${THEME.COLORS.BLACK};
  font-size: ${THEME.SIZES.FONT.MEDIUM};
  font-weight: ${THEME.FONTS.WEIGHT.W600};
  line-height: ${THEME.SIZES.LINE_HEIGHT.LH20};
  letter-spacing: ${THEME.SIZES.LETTER_SPACING.LS02};
`;

export const CellTextInfo = styled(Typography)`
  color: ${THEME.COLORS.INFO_GRAY};
  font-size: ${THEME.SIZES.FONT.SMALL};
  font-weight: ${THEME.FONTS.WEIGHT.W400};
  line-height: ${THEME.SIZES.LINE_HEIGHT.LH16};
  letter-spacing: ${THEME.SIZES.LETTER_SPACING.LS01};
`;
