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

export interface ICellObj {
  first: string;
  second: string;
  third: string;
  fourth: string;
  fifth: string;
}

const TicketsObj: ICellObj = {
  first: "512px",
  second: "248px",
  third: "180px",
  fourth: "104px",
  fifth: "77px",
};

const ContactsObj: ICellObj = {
  first: "400px",
  second: "248px",
  third: "248px",
  fourth: "170px",
  fifth: "56px",
};

interface StyledHeadCellProps {
  $cellWidth: keyof ICellObj;
  $isContacts: boolean; // Добавляем $isContacts с соответствующим типом
}

export const StyledHeadCell = styled(TableCell)<StyledHeadCellProps>`
  min-width: ${(props) =>
    props.$isContacts
      ? ContactsObj[props.$cellWidth]
      : TicketsObj[props.$cellWidth]};
`;
