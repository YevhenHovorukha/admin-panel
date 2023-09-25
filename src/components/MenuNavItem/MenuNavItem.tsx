import { ReactNode } from "react";

import { MenuItemIcon, StyledMenuLink, MenuItemText } from "./styled";

interface IMenuNavItemProp {
  to: string;
  text: string;
  children: ReactNode;
}

const MenuNavItem = ({ to, text, children }: IMenuNavItemProp) => {
  return (
    <StyledMenuLink to={to}>
      <MenuItemIcon>{children}</MenuItemIcon>
      <MenuItemText>{text}</MenuItemText>
    </StyledMenuLink>
  );
};

export default MenuNavItem;
