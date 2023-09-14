import { Card } from "@mui/material";
import React from "react";
import styled from "styled-components";

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 40px 32px;
  width: 380px;
  height: 794px;
`;

interface IAuthCardProps {
  children: React.ReactNode;
}

const AuthCard = ({ children }: IAuthCardProps) => {
  return <StyledCard>{children}</StyledCard>;
};

export default AuthCard;
