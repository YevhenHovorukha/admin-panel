import { Container, Typography } from "@mui/material";
import { containerStyles } from "./Styles";
import Card from "@mui/material/Card";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import AuthInput from "../../components/AuthInput";
import AuthCardInfo from "../../components/AuthCardInfo";
import styled from "styled-components";

const StyledBox = styled(Box)`
  margin-top: 48px;
`;

const StyledCard = styled(Card)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 40px 32px;
  width: 380px;
  height: 794px;
`;

const SignUp = () => {
  const { register, handleSubmit } = useForm();

  return (
    <Container sx={containerStyles}>
      <StyledCard>
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
          <Typography variant="inputLabel">email</Typography>

          <AuthInput
            text="Email address"
            register={register}
            registerName={"email"}
          />

          <Typography variant="inputLabel">First name</Typography>

          <AuthInput
            text="First Name"
            register={register}
            registerName={"firstName"}
          />

          <Typography variant="inputLabel">LAST name</Typography>

          <AuthInput
            text="Last Name"
            register={register}
            registerName={"lastName"}
          />

          <Typography variant="inputLabel">password</Typography>

          <AuthInput
            text="Password"
            register={register}
            registerName={"password"}
            isPassword={true}
          />
          <Typography variant="inputLabel">confirm password</Typography>

          <AuthInput
            text="Password"
            register={register}
            registerName={"confirmPassword"}
            isPassword={true}
          />

          <Button type="submit" variant="contained" color="primary">
            Register
          </Button>
        </StyledBox>
      </StyledCard>
    </Container>
  );
};

export default SignUp;
