import { Box } from "@mui/material";
import styled from "styled-components";

import { THEME } from "../../../theme";

export const displayNone = {
  display: "none",
};

export const ChartWrapper = styled(Box)`
  margin-top: 54px;
`;

export const XAxisTicksStyle = {
  fill: THEME.COLORS.GRAY,
  fontSize: THEME.SIZES.FONT.CHART,
  dy: 5,
};

export const YAxisTicksStyle = {
  ...XAxisTicksStyle,
  dy: -6,
};
