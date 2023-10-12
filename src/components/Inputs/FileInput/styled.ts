import { Box, Typography } from "@mui/material";
import styled from "styled-components";

import { THEME } from "../../../theme";

export const StyledInput = styled.input`
  display: none;
`;

export const StyledLabel = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 24px;
`;

export const GrayCircle = styled(Box)`
  width: 60px;
  height: 60px;
  background-color: ${THEME.COLORS.MIDDLE_GRAY};
  border-radius: 50%;
`;

export const FileInputText = styled(Typography)`
  font-size: ${THEME.SIZES.FONT.MEDIUM};
  font-weight: ${THEME.FONTS.WEIGHT.W600};
  line-height: ${THEME.SIZES.LINE_HEIGHT.LH20};
  letter-spacing: ${THEME.SIZES.LETTER_SPACING.LS02};
`;

export const StyledAvatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
`;
