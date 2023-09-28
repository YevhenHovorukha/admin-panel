import ROUTES from "../../routes";

import { StyledLink, StyledSignUpText } from "./styled";

const SignUpText = () => {
  return (
    <StyledSignUpText>
      Don’t have an account? <StyledLink to={ROUTES.SIGNUP}>Sign up</StyledLink>
    </StyledSignUpText>
  );
};
export default SignUpText;
