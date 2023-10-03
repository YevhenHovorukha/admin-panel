import { TableRow, Box } from "@mui/material";
import styled from "styled-components";

export const BodyRow = styled(TableRow)`
  & > td {
    border-bottom: 2px solid #dfe0eb;
    padding: 24px 0;
    box-sizing: border-box;
  }

  & td:first-child {
    padding: 20px 40px 22px 32px;
  }

  &:hover {
    background: rgba(55, 81, 255, 0.04);
  }
`;

export const UserBox = styled(Box)`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const UserPhoto = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
`;

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
