import { Box, Typography } from "@mui/material";
import styled from "styled-components";

import { THEME } from "../../theme";

export const CardBox = styled(Box)`
  padding: 32px;
  width: 586px;
  height: 268px;
  background-color: ${THEME.COLORS.WHITE};
  border-radius: 8px;
  border: 1px solid ${THEME.COLORS.LIGHT_GRAY};
`;

export const UserBox = styled(Box)`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const UserPhoto = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserName = styled(Typography)`
  color: ${THEME.COLORS.BLACK};
  font-size: ${THEME.SIZES.FONT.SEMI_BIG};
  font-weight: ${THEME.FONTS.WEIGHT.W600};
  line-height: ${THEME.SIZES.LINE_HEIGHT.LH20};
  letter-spacing: ${THEME.SIZES.LETTER_SPACING.LS02};
`;

export const IdeaInfo = styled(Typography)`
  margin-top: 20px;
  color: ${THEME.COLORS.GRAY};
  font-size: ${THEME.SIZES.FONT.MEDIUM};
  font-weight: ${THEME.FONTS.WEIGHT.W400};
  letter-spacing: ${THEME.SIZES.LETTER_SPACING.LS03};
`;

export const IdeaText = styled(Typography)`
  margin-top: 6px;
  color: ${THEME.COLORS.BLACK};
  font-size: ${THEME.SIZES.FONT.BIG};
  font-weight: ${THEME.FONTS.WEIGHT.W700};
  letter-spacing: ${THEME.SIZES.LETTER_SPACING.LS04};
`;
