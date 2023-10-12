import { TableRow, Box, Typography } from "@mui/material";
import styled from "styled-components";

import { THEME } from "../../../theme";

export const BodyRow = styled(TableRow)`
  & > td {
    border-bottom: 2px solid #dfe0eb;
    padding: 24px 0;
    box-sizing: border-box;
  }

  & td:first-child {
    padding: 20px 40px 22px 32px;
  }

  &:hover {
    background: rgba(55, 81, 255, 0.04);
  }
`;

export const UserBox = styled(Box)`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const UserPhoto = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
`;

export const TableCellText = styled(Typography)`
  max-width: 208px;
  font-size: ${THEME.SIZES.FONT.MEDIUM};
  font-weight: ${THEME.FONTS.WEIGHT.W600};
  line-height: ${THEME.SIZES.LINE_HEIGHT.LH20};
  letter-spacing: ${THEME.SIZES.LETTER_SPACING.LS02};
`;

export const TableCellAdressText = styled(Typography)`
  max-width: 208px;
  font-size: ${THEME.SIZES.FONT.SMALL};
  font-weight: ${THEME.FONTS.WEIGHT.W400};
  line-height: ${THEME.SIZES.LINE_HEIGHT.LH16};
  letter-spacing: ${THEME.SIZES.LETTER_SPACING.LS01};
`;
