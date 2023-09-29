import { Box } from "@mui/material";
import styled from "styled-components";

export const PriorityBoxRed = styled(Box)`
  height: 24px;
  width: 54px;

  border-radius: 100px;
  background: #f12b2c;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

export const PriorityBoxYellow = styled(PriorityBoxRed)`
  background: #fec400;
`;

export const PriorityBoxGreen = styled(PriorityBoxRed)`
  background: #29cc97;
  width: 76px;
`;
