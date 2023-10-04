import { Select } from "@mui/material";
import styled from "styled-components";

import { THEME } from "../../../theme";

export const StyledSelect = styled(Select)`
  color: ${THEME.COLORS.GRAY};
  padding: 0;
  margin-top: 6px;
  height: 42px;
  width: 100%;
`;
