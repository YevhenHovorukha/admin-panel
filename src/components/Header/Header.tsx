import { useLocation } from "react-router-dom";

import { ReactComponent as SearchIcon } from "../../assets/logos/search.svg";
import { ReactComponent as NotificationIcon } from "../../assets/logos/notification.svg";
import UserImage from "../../assets/images/UserImage.png";

import {
  HeaderBox,
  HeaderMainText,
  HeaderInfoBox,
  HeaderIconButton,
  VerticalLine,
  UserName,
  UserPhoto,
} from "./styled";
import { getPathName } from "./helper";

const Header = () => {
  const location = useLocation();

  const pathName = getPathName(location?.pathname);

  return (
    <HeaderBox>
      <HeaderMainText variant="h1">{pathName}</HeaderMainText>
      <HeaderInfoBox>
        <HeaderIconButton>
          <SearchIcon />
        </HeaderIconButton>

        <HeaderIconButton>
          <NotificationIcon />
        </HeaderIconButton>
        <VerticalLine />
        <UserName>Jones Ferdinand</UserName>

        <UserPhoto src={UserImage} alt="userImage" />
      </HeaderInfoBox>
    </HeaderBox>
  );
};

export default Header;
