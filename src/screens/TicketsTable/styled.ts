import { Box } from "@mui/material";
import styled from "styled-components";

interface IColorsObj {
  red: string;
  yellow: string;
  green: string;
}

const colorsObj: IColorsObj = {
  red: "#f12b2c",
  yellow: "#fec400",
  green: "#29cc97",
};

export const PriorityBox = styled(Box)<{
  backgroundcolor: keyof IColorsObj;
}>`
  height: 24px;
  width: ${(props) => (props.backgroundcolor === "green" ? "76px" : "54px")};
  border-radius: 100px;
  background: ${(props) => colorsObj[props.backgroundcolor || "red"]};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;
