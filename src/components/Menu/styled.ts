import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import Icon from "@mui/material/Icon";

import { THEME } from "../../theme";

export const MenuBox = styled.nav`
  background-color: ${THEME.COLORS.NAVY};
  width: 255px;
  min-height: 100vh;
`;

export const MenuLogoBox = styled(Box)`
  display: flex;
  width: 255px;
  align-items: center;
  gap: 12px;
  margin: 41px 0 63px 32px;
`;

export const LogoIcon = styled(Icon)`
  width: 32px;
  height: 32px;
`;

export const LogoText = styled(Typography)`
  font-size: ${THEME.SIZES.FONT.SEMI_BIG};
  font-weight: ${THEME.FONTS.WEIGHT.W700};
  color: ${THEME.COLORS.MIDDLE_GRAY};
  letter-spacing: ${THEME.SIZES.LETTER_SPACING.LS04};
`;

export const StyledLine = styled.hr`
  color: ${THEME.COLORS.LIGHT_GRAY};
  margin: 16px 0;
  opacity: 0.06;
`;
