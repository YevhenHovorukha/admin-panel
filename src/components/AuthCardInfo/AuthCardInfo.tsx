import { Box, Typography, Icon } from "@mui/material";
import LogoSVG from "../../assets/logos/authLogo";
import styled from "styled-components";

interface IAuthCardInfo {
  mainText: string;
  additionalText: string;
}

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const AuthCardInfo = ({ mainText, additionalText }: IAuthCardInfo) => {
  return (
    <>
      <StyledBox>
        <Icon fontSize="small">
          <LogoSVG />
        </Icon>
        <Typography variant="authLogoText">Dashboard Kit</Typography>
      </StyledBox>
      <Typography variant="authMainText">{mainText}</Typography>
      <Typography variant="authAdditionalText">{additionalText}</Typography>
    </>
  );
};

export default AuthCardInfo;
