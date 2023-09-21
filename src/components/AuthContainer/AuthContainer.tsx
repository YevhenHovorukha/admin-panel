import { Container } from "@mui/material";
import styled from "styled-components";

const AuthContainer = styled(Container)`
  background-color: #363740;
  padding: 5%;
  width: 100%;
  min-height: 100vh;

  @media (min-width: 1200px) {
    max-width: none;
  }

  @media (min-width: 600px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export default AuthContainer;
