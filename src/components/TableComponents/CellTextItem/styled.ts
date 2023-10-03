import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const CellTextBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const CellTextMain = styled(Typography)`
  color: #252733;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.2px;
`;

export const CellTextAdd = styled(Typography)`
  color: #c5c7cd;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.1px;
`;
