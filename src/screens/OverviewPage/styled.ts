import { Box, Typography } from "@mui/material";
import styled from "styled-components";

import { THEME } from "../../theme";

export const InfoBoxContainer = styled(Box)`
  display: inline-flex;
  gap: 30px;
`;

export const MainOverview = styled(Box)`
  display: inline-flex;
  margin-top: 30px;
  width: 1122px;
  height: 546px;
  border-radius: 8px;
  border: 1px solid ${THEME.COLORS.LIGHT_GRAY};
  background: ${THEME.COLORS.WHITE};
`;
