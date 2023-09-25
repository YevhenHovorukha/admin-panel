import { ReactComponent as MySvgFile } from "../../assets/logos/menuLogo.svg";
import MenuNavItem from "../MenuNavItem";

import { ADDITIONAL_NAV_INFO, NAV_INFO } from "./helpers";
import { LogoIcon, LogoText, MenuBox, MenuLogoBox, StyledLine } from "./styled";

const Menu = () => {
  return (
    <MenuBox>
      <MenuLogoBox>
        <LogoIcon>
          <MySvgFile />
        </LogoIcon>
        <LogoText>Dashboard Kit</LogoText>
      </MenuLogoBox>
      {NAV_INFO.map((item) => (
        <MenuNavItem
          key={item.text}
          to={item.to}
          text={item.text}
          icon={item.icon}
          activeIcon={item.activeIcon}
        ></MenuNavItem>
      ))}
      <StyledLine />
      {ADDITIONAL_NAV_INFO.map((item) => (
        <MenuNavItem
          key={item.text}
          to={item.to}
          text={item.text}
          icon={item.icon}
          activeIcon={item.activeIcon}
        ></MenuNavItem>
      ))}
    </MenuBox>
  );
};

export default Menu;
