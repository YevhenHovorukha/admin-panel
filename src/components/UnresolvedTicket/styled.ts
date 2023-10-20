import { Box, Typography } from "@mui/material";
import styled from "styled-components";

import { THEME } from "../../theme";

export const StyledBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 20px 32px 18px;
  height: 58px;
  width: 100%;
  border-bottom: 1px solid ${THEME.COLORS.LIGHT_GRAY};
`;

export const TicketName = styled(Typography)`
  color: ${THEME.COLORS.BLACK};
  font-size: ${THEME.SIZES.FONT.MEDIUM};
  font-weight: ${THEME.FONTS.WEIGHT.W600};
  line-height: ${THEME.SIZES.LINE_HEIGHT.LH20};
  letter-spacing: ${THEME.SIZES.LETTER_SPACING.LS02};
`;

export const TicketsValue = styled(Typography)`
  color: ${THEME.COLORS.GRAY};
  font-size: ${THEME.SIZES.FONT.MEDIUM};
  font-weight: ${THEME.FONTS.WEIGHT.W600};
  line-height: ${THEME.SIZES.LINE_HEIGHT.LH20};
  letter-spacing: ${THEME.SIZES.LETTER_SPACING.LS02};
`;
