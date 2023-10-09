import { Icon, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { THEME } from "../../theme";

export const StyledMenuLink = styled(NavLink)`
  width: 100%;
  height: 56px;
  display: inline-flex;
  padding: 18px 24px 18px 32px;
  align-items: center;
  gap: 24px;
  text-decoration: none;

  &.active {
    color: ${THEME.COLORS.WHITE};
    background-color: rgba(159, 162, 180, 0.08);
    border-left: 3px solid #dde2ff;
  }
`;

export const MenuItemIcon = styled(Icon)`
  display: flex;
  width: 16px;
  height: 16px;
`;

export const MenuItemText = styled(Typography)<{ $isActive?: boolean }>`
  color: ${(props) => (props.$isActive ? "#dde2ff" : "#a4a6b3")};
  font-size: ${THEME.SIZES.FONT.REGULAR};
  font-weight: ${THEME.FONTS.WEIGHT.W400};
  letter-spacing: ${THEME.SIZES.LETTER_SPACING.LS02};
`;
