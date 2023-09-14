import React from "react";
import { Container } from "@mui/material";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  background-color: #363740;
  padding: 5%;
  width: 100%;
  height: 100%;

  @media (min-width: 1200px) {
    max-width: none;
  }

  @media (min-width: 600px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

interface IAuthContainerProps {
  children: React.ReactNode;
}

const AuthContainer = ({ children }: IAuthContainerProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default AuthContainer;
