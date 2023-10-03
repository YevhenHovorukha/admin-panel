import { Table, TablePagination } from "@mui/material";
import styled from "styled-components";

export const StyledTable = styled(Table)`
  min-width: 1122px;
`;

export const StyledPagination = styled(TablePagination)`
  height: 72px;
  overflow: hidden;
  color: #9fa2b4;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.3px;
  &:last-child {
    padding: 10px 20px 24px;
  }
` as typeof TablePagination;
