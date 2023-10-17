import { Box } from "@mui/material";
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

export const ChartContainer = styled(Box)`
  width: 780px;
  padding: 32px;
  border-right: 1px solid ${THEME.COLORS.LIGHT_GRAY};
`;

export const ChartInfoContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  > :last-child {
    border: none;
  }
`;

export const ListsContainer = styled(Box)`
  display: flex;
  margin-top: 30px;
  gap: 30px;
`;

export const ListContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 546px;
  height: 336px;
  background: ${THEME.COLORS.WHITE};
  border-radius: 8px;
  border: 1px solid ${THEME.COLORS.LIGHT_GRAY};
`;
