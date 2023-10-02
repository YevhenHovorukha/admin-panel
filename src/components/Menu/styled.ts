import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import Icon from "@mui/material/Icon";

export const MenuBox = styled.nav`
  background-color: #363740;
  width: 255px;
  height: 100vh;
`;

export const MenuLogoBox = styled(Box)`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 41px 0 63px 32px;
`;

export const LogoIcon = styled(Icon)`
  width: 32px;
  height: 32px;
`;

export const LogoText = styled(Typography)`
  font-size: 19px;
  font-weight: 700;
  color: #a4a6b3;
  letter-spacing: 0.4px;
`;

export const StyledLine = styled.hr`
  color: #dfe0eb;
  margin: 16px 0;
  opacity: 0.06;
`;
