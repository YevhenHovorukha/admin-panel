import { Icon, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledMenuLink = styled(NavLink)`
  width: 100%;
  height: 56px;
  display: inline-flex;
  padding: 18px 24px 18px 32px;
  align-items: center;
  gap: 24px;
  text-decoration: none;

  &.active {
    color: white;
    background-color: rgba(159, 162, 180, 0.08);
    border-left: 3px solid #dde2ff;
  }
`;

export const MenuItemIcon = styled(Icon)`
  display: flex;
  width: 16px;
  height: 16px;
`;

export const MenuItemText = styled(Typography)`
  color: #dde2ff;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.2px;
`;
