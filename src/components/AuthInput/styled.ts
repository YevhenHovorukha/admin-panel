import { TextField, Typography, IconButton } from "@mui/material";
import styled from "styled-components";

export const StyledTextField = styled(TextField)`
  padding: 0;
  margin-top: 6px;
  height: 42px;
  width: 100%;

  input {
    height: 42px;
    padding: 0 16px;
  }
`;

export const StyledLabel = styled(Typography)`
  display: block;
  color: #9fa2b4;
  font-size: 12px;
  font-weight: 700;
  height: 16px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
`;

export const StyledIconButton = styled(IconButton)`
  margin-right: -8px;
`;
