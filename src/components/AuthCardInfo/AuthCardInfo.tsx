import { Box, Typography, Icon } from "@mui/material";

import MainLogo from "../../assets/logos/authLogo";

import { StyledBox } from "./styles";

interface IAuthCardInfo {
  mainText: string;
  additionalText: string;
}

const AuthCardInfo = ({ mainText, additionalText }: IAuthCardInfo) => {
  return (
    <>
      <StyledBox>
        <Icon fontSize="small">
          <MainLogo />
        </Icon>
        <Typography variant="authLogoText">Dashboard Kit</Typography>
      </StyledBox>
      <Typography variant="authMainText">{mainText}</Typography>
      <Typography variant="authAdditionalText">{additionalText}</Typography>
    </>
  );
};

export default AuthCardInfo;
