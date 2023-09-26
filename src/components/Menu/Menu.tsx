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
        <MenuNavItem {...item} key={item.text} />
      ))}
      <StyledLine />
      {ADDITIONAL_NAV_INFO.map((item) => (
        <MenuNavItem {...item} key={item.text} />
      ))}
    </MenuBox>
  );
};

export default Menu;
