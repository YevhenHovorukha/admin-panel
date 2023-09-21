import { Box, Typography, Icon } from "@mui/material";
import styled from "styled-components";

export const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const StyledLogoIcon = styled(Icon)`
  width: 48px;
  height: 48px;
`;

export const StyledLogoText = styled(Typography)`
  height: 24px;
  color: #a4a6b3;
  font-size: 19px;
  font-weight: 700;
  letter-spacing: 0.4px;
`;

export const StyledMainText = styled(Typography)`
  margin: 32px auto 0;
  height: 30px;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.3px;
`;

export const StyledAdditText = styled(Typography)`
  margin: 12px auto 0;
  color: #9fa2b4;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.3px;
`;
