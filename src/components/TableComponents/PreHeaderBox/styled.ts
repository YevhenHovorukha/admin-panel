import { Box, Typography } from "@mui/material";
import styled from "styled-components";

import { THEME } from "../../../theme";

export const PreHeaderBoxWrapper = styled(Box)`
  padding: 37px 32px;
  display: flex;
  justify-content: space-between;
`;

export const SortAndFilterBox = styled(Box)`
  display: flex;
  gap: 31px;
`;

export const SortAndFilterItem = styled(Box)`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const SortAndFilterItemText = styled(Typography)`
  color: ${THEME.COLORS.DARK_GRAY};
  font-size: ${THEME.SIZES.FONT.MEDIUM};
  font-weight: ${THEME.FONTS.WEIGHT.W600};
  letter-spacing: ${THEME.SIZES.LETTER_SPACING.LS02};
`;

export const AddText = styled(Typography)`
  color: ${THEME.COLORS.MAIN_BLUE};
  font-size: ${THEME.SIZES.FONT.MEDIUM};
  font-weight: ${THEME.FONTS.WEIGHT.W600};
  line-height: ${THEME.SIZES.LINE_HEIGHT.LH20};
  letter-spacing: ${THEME.SIZES.LETTER_SPACING.LS02};
  cursor: pointer;
`;

export const UserPhoto = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
`;
