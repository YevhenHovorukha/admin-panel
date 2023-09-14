import MainLogo from "../../assets/logos/authLogo";

import {
  StyledBox,
  StyledMainText,
  StyledAdditText,
  StyledLogoText,
  StyledLogoIcon,
} from "./styles";

interface IAuthCardInfo {
  mainText: string;
  additionalText: string;
}

const AuthCardInfo = ({ mainText, additionalText }: IAuthCardInfo) => {
  return (
    <>
      <StyledBox>
        <StyledLogoIcon>
          <MainLogo />
        </StyledLogoIcon>
        <StyledLogoText>Dashboard Kit</StyledLogoText>
      </StyledBox>
      <StyledMainText>{mainText}</StyledMainText>
      <StyledAdditText>{additionalText}</StyledAdditText>
    </>
  );
};

export default AuthCardInfo;
