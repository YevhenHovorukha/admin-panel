import { Typography, Select } from "@mui/material";
import Box from "@mui/material/Box";
import styled from "styled-components";

export const ModalBox = styled(Box)`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px 32px;
  width: 380px;
  height: 606px;
  background: #fff;
`;

export const MainModalText = styled(Typography)`
  align-self: center;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.3px;
`;

export const CancelText = styled(Typography)`
  margin-top: auto;
  color: #3751ff;
  text-align: center;
  font-family: Mulish;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.2px;
  cursor: pointer;
`;

export const StyledSelect = styled(Select)`
  color: grey;
  padding: 0;
  margin-top: 6px;
  height: 42px;
  width: 100%;
`;
