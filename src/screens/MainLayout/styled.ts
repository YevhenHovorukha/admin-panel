import { Box } from "@mui/material";
import styled from "styled-components";

import { THEME } from "../../theme";

export const LayoutBox = styled(Box)`
  display: flex;
  min-height: 100hv;
`;

export const MainBox = styled.main`
  flex: 1;
  padding: 30px;
  background-color: ${THEME.COLORS.APP_BACKGROUND};
`;
