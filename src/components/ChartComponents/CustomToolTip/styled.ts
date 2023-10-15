import { Box, Typography } from "@mui/material";
import styled from "styled-components";

import { THEME } from "../../../theme";

export const TooltipBox = styled(Box)`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const TooltipText = styled(Typography)`
  font-size: ${THEME.SIZES.FONT.MEDIUM};
  font-weight: ${THEME.FONTS.WEIGHT.W600};
  line-height: ${THEME.SIZES.LINE_HEIGHT.LH20};
  letter-spacing: ${THEME.SIZES.LETTER_SPACING.LS02};
`;
