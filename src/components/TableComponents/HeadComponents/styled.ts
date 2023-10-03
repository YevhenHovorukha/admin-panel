import { TableRow, TableCell } from "@mui/material";
import styled from "styled-components";

export const HeadRow = styled(TableRow)`
  & > th {
    padding: 7px 0 8px;
    align-items: center;
    color: #9fa2b4;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.2px;
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
