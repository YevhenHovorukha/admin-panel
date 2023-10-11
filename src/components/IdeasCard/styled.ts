import { Box } from "@mui/material";
import styled from "styled-components";

import { THEME } from "../../theme";

export const CardBox = styled(Box)`
  width: 516px;
  height: 268px;
  background-color: ${THEME.COLORS.WHITE};
  border-radius: 8px;
  border: 1px solid ${THEME.COLORS.LIGHT_GRAY};
`;
