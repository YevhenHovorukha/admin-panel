import { useLocation } from "react-router-dom";

import { MenuItemIcon, StyledMenuLink, MenuItemText } from "./styled";

interface IMenuNavItemProp {
  to: string;
  text: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  activeIcon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const MenuNavItem = ({
  to,
  text,
  icon: Icon,
  activeIcon: ActiveIcon,
}: IMenuNavItemProp) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <StyledMenuLink to={to}>
      <MenuItemIcon>{isActive ? <ActiveIcon /> : <Icon />}</MenuItemIcon>
      <MenuItemText>{text}</MenuItemText>
    </StyledMenuLink>
  );
};

export default MenuNavItem;
