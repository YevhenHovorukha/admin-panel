import { Box, IconButton, Typography } from "@mui/material";
import styled from "styled-components";

export const HeaderBox = styled.header`
  display: flex;
  aligh-items: center;
`;

export const HeaderMainText = styled(Typography)`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.3px;
`;

export const HeaderInfoBox = styled(Box)`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export const HeaderIconButton = styled(IconButton)`
  margin-left: 24px;
`;

export const VerticalLine = styled.div`
  margin: 0 32px 0;
  width: 1px;
  height: 32px;
  background-color: #dfe0eb;
`;

export const UserName = styled(Typography)`
  color: #252733;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.2px;
`;

export const UserPhoto = styled.img`
  margin-left: 14px;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #ccc;
  padding: 2px;
`;
