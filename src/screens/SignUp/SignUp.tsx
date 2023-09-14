import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import AuthInput from "../../components/AuthInput";
import AuthCardInfo from "../../components/AuthCardInfo";
import AuthContainer from "../../components/AuthContainer";
import AuthCard from "../../components/AuthCard";

const SignUp = () => {
  const { register, handleSubmit } = useForm();

  return (
    <AuthContainer>
      <AuthCard>
        <AuthCardInfo
          mainText="Sign Up"
          additionalText="Create a new account"
        />
        <StyledBox
          component="form"
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <AuthInput
            text="Email address"
            register={register}
            registerName={"email"}
            label="email"
          />

          <AuthInput
            text="First Name"
            register={register}
            registerName={"firstName"}
            label="First name"
          />

          <AuthInput
            text="Last Name"
            register={register}
            registerName={"lastName"}
            label="LAST name"
          />

          <AuthInput
            text="Password"
            register={register}
            registerName={"password"}
            isPassword={true}
            label="password"
          />

          <AuthInput
            text="Password"
            register={register}
            registerName={"confirmPassword"}
            isPassword={true}
            label="confirm password"
          />

          <Button type="submit" variant="contained" color="primary">
            Register
          </Button>
        </StyledBox>
      </AuthCard>
    </AuthContainer>
  );
};

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 48px;
`;

export default SignUp;
