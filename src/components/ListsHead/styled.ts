import { Box, Link, Typography } from "@mui/material";
import styled from "styled-components";

import { THEME } from "../../theme";

export const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 32px;
`;

export const TextContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

export const MainText = styled(Typography)`
  color: ${THEME.COLORS.BLACK};
  font-size: ${THEME.SIZES.FONT.SEMI_BIG};
  font-weight: ${THEME.FONTS.WEIGHT.W700};
  line-height: normal;
  letter-spacing: ${THEME.SIZES.LETTER_SPACING.LS04};
`;

export const StyledLink = styled(Link)`
  color: ${THEME.COLORS.MAIN_BLUE};
  font-size: ${THEME.SIZES.FONT.MEDIUM};
  font-weight: ${THEME.FONTS.WEIGHT.W600};
  line-height: ${THEME.SIZES.LINE_HEIGHT.LH20};
  letter-spacing: ${THEME.SIZES.LETTER_SPACING.LS02};
  text-decoration: none;
`;

export const InfoText = styled(Typography)`
  margin-top: 8px;
  color: ${THEME.COLORS.GRAY};
  font-size: ${THEME.SIZES.FONT.SMALL};
  font-weight: ${THEME.FONTS.WEIGHT.W400};
  line-height: ${THEME.SIZES.LINE_HEIGHT.LH16};
  letter-spacing: ${THEME.SIZES.LETTER_SPACING.LS01};
`;

export const InfoTextSpan = styled.span`
  color: ${THEME.COLORS.DARK_GRAY};
  font-size: ${THEME.SIZES.FONT.SMALL};
  font-weight: ${THEME.FONTS.WEIGHT.W400};
  line-height: ${THEME.SIZES.LINE_HEIGHT.LH16};
  letter-spacing: ${THEME.SIZES.LETTER_SPACING.LS01};
`;
