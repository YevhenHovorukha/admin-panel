import { TableRow, TableCell } from "@mui/material";
import styled from "styled-components";

import { THEME } from "../../../theme";

export const HeadRow = styled(TableRow)`
  & > th {
    padding: 7px 0 8px;
    align-items: center;
    color: ${THEME.COLORS.GRAY};
    font-size: ${THEME.SIZES.FONT.MEDIUM};
    font-weight: ${THEME.FONTS.WEIGHT.W700};
    letter-spacing: ${THEME.SIZES.LETTER_SPACING.LS02};
    border-bottom: 2px solid #dfe0eb;
  }
  & th:first-child {
    padding-left: 32px;
  }
`;

interface ICellObj {
  first: string;
  second: string;
  third: string;
  fourth: string;
  fifth: string;
}

const cellObj: ICellObj = {
  first: "512px",
  second: "248px",
  third: "180px",
  fourth: "104px",
  fifth: "77px",
};

export const StyledHeadCell = styled(TableCell)<{ $cellWidth: keyof ICellObj }>`
  min-width: ${(props) => cellObj[props.$cellWidth]};
`;
