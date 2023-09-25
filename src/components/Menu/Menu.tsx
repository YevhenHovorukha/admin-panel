import { ReactComponent as MySvgFile } from "../../assets/logos/menuLogo.svg";
import { ReactComponent as OverviewIcon } from "../../assets/logos/overview.svg";
import MenuNavItem from "../MenuNavItem";

import { LogoIcon, LogoText, MenuBox, MenuLogoBox } from "./styled";

const Menu = () => {
  return (
    <MenuBox>
      <MenuLogoBox>
        <LogoIcon>
          <MySvgFile />
        </LogoIcon>
        <LogoText>Dashboard Kit</LogoText>
      </MenuLogoBox>
      <MenuNavItem to="/" text="Overview">
        <OverviewIcon />
      </MenuNavItem>
    </MenuBox>
  );
};

export default Menu;
