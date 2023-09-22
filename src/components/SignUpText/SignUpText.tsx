import { StyledLink, StyledSignUpText } from "./styled";

const SignUpText = () => {
  return (
    <StyledSignUpText>
      Don’t have an account? <StyledLink to="/sigup">Sign up</StyledLink>
    </StyledSignUpText>
  );
};
export default SignUpText;
