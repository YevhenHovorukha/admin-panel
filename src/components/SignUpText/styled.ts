import styled from "styled-components";
import { Link } from "react-router-dom";

import { StyledAdditText } from "../AuthCardInfo/styled";
import { THEME } from "../../theme";

export const StyledSignUpText = styled(StyledAdditText)`
  margin-top: ${THEME.SIZES.MARGIN.M32};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${THEME.COLORS.MAIN_BLUE};
`;
