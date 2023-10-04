import { Box, IconButton, Typography } from "@mui/material";
import styled from "styled-components";

import { THEME } from "../../theme";

export const HeaderBox = styled.header`
  margin-bottom: 58px;
  display: flex;
  aligh-items: center;
`;

export const HeaderMainText = styled(Typography)`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.3px;
`;

export const HeaderInfoBox = styled(Box)`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export const HeaderIconButton = styled(IconButton)`
  margin-left: ${THEME.SIZES.MARGIN.M24};
`;

export const VerticalLine = styled.div`
  margin: 0 32px 0;
  width: 1px;
  height: 32px;
  background-color: ${THEME.COLORS.LIGHT_GRAY};
`;

export const UserName = styled(Typography)`
  color: ${THEME.COLORS.BLACK};
  font-size: ${THEME.SIZES.FONT.MEDIUM}
  font-weight: ${THEME.FONTS.WEIGHT.W600};
  line-height: ${THEME.SIZES.LINE_HEIGHT.LH20};
  letter-spacing: ${THEME.SIZES.LETTER_SPACING.LS02};
`;

export const UserPhoto = styled.img`
  margin-left: ${THEME.SIZES.MARGIN.M14};
  width: 42px;
  height: 42px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #ccc;
  padding: 2px;
`;
