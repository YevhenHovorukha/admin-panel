import { Table, TablePagination } from "@mui/material";
import styled from "styled-components";

import { THEME } from "../../theme";

export const StyledTable = styled(Table)`
  min-width: 1122px;
`;

export const StyledPagination = styled(TablePagination)`
  height: 72px;
  overflow: hidden;
  color: ${THEME.COLORS.GRAY};
  font-size: ${THEME.SIZES.FONT.MEDIUM};
  font-weight: ${THEME.FONTS.WEIGHT.W400};
  line-height: ${THEME.SIZES.LINE_HEIGHT.LH20};
  letter-spacing: ${THEME.SIZES.LETTER_SPACING.LS03};
  &:last-child {
    padding: 10px 20px 24px;
  }
` as typeof TablePagination;
