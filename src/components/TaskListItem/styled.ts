import { Box, Typography } from "@mui/material";
import styled from "styled-components";

import { THEME } from "../../theme";

export const StyledBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 20px 32px 18px;
  height: 58px;
  width: 100%;
  border-bottom: 1px solid ${THEME.COLORS.LIGHT_GRAY};
`;

interface IStatusOBJ {
  yellow: string;
  green: string;
  gray: string;
}

const statusObj = {
  yellow: THEME.COLORS.YELLOW,
  green: THEME.COLORS.GREEN,
  gray: THEME.COLORS.LIGHTEST_GRAY,
};

export const StatusBox = styled(Box)<{
  backgroundcolor: keyof IStatusOBJ;
}>`
  height: 24px;
  width: ${(props) => (props.backgroundcolor === "green" ? "54px" : "76px")};
  border-radius: 8px;
  background: ${(props) =>
    statusObj[props.backgroundcolor || THEME.COLORS.LIGHTEST_GRAY]};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) =>
    props.backgroundcolor === "gray" ? THEME.COLORS.GRAY : THEME.COLORS.WHITE};
`;

export const StatusText = styled(Typography)`
  font-size: 11px;
  font-weight: ${THEME.FONTS.WEIGHT.W700};
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;
