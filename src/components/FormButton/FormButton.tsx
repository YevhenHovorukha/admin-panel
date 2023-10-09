import { Button } from "@mui/material";
import styled from "styled-components";

import { THEME } from "../../theme";

const FormButton = styled(Button)`
  height: 48px;
  width: 100%;
  border-radius: 8px;
  background-color: ${THEME.COLORS.MAIN_BLUE};
  text-transform: none;
`;

export default FormButton;
