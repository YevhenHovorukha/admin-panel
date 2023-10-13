import { Box, Typography } from "@mui/material";
import styled from "styled-components";

import { THEME } from "../../theme";

export const ChartContainer = styled(Box)`
  width: 780px;
  padding: 32px;
  border-right: 1px solid ${THEME.COLORS.LIGHT_GRAY};
`;

export const InfoBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  height: 16px;
`;

export const LineBox = styled(Box)`
  height: 16px;
  width: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Line = styled.div<{ $isBlue?: boolean }>`
  width: 100%;
  height: 2px;
  background-color: ${(props) =>
    props.$isBlue ? THEME.COLORS.MAIN_BLUE : THEME.COLORS.LIGHT_GRAY};
`;

export const MarkerBox = styled(Box)<{ $Gap?: string }>`
  display: flex;
  gap: ${(props) => props.$Gap ?? "8px"};
`;

export const ChartHeadText = styled(Typography)`
  color: ${THEME.COLORS.BLACK};
  font-size: ${THEME.SIZES.FONT.SEMI_BIG};
  font-weight: ${THEME.FONTS.WEIGHT.W700};
  line-height: normal;
  letter-spacing: ${THEME.SIZES.LETTER_SPACING.LS04};
`;

export const ChartInfoText = styled(Typography)`
  color: ${THEME.COLORS.GRAY};
  font-size: ${THEME.SIZES.FONT.SMALL};
  font-weight: ${THEME.FONTS.WEIGHT.W400};
  line-height: ${THEME.SIZES.LINE_HEIGHT.LH16}
  letter-spacing: ${THEME.SIZES.LETTER_SPACING.LS01};
`;
