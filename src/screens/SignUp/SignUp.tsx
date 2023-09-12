import { useState } from "react";
import { Container } from "@mui/material";
import {
  containerStyles,
  CardStyle,
  LogoBoxStyle,
  IconStyle,
  LogoTextStyle,
  MainTextStyle,
  AdditionalTextStyle,
  LabelStyle,
  InputStyle,
  FormStyle,
  InputProps,
  ButtonStyle,
} from "./Styles";
import Card from "@mui/material/Card";
import { Box } from "@mui/system";
import Icon from "@mui/material/Icon";
import Typography from "@mui/material/Typography";
import { Button, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SVGinvisible from "../../assets/logos/isVisible";
import LogoSVG from "../../assets/logos/authLogo";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import AuthInput from "../../components/AuthInput";

const StyledTypography = styled(Typography)`
  margin-top: 24px;
  color: #9fa2b4;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.3px;
  text-transform: uppercase;
`;

const StyledTextField = styled(TextField)`
  padding: 0;
  margin-top: 6px;
  width: 100%;
`;

const SignUp = () => {
  const { register, handleSubmit } = useForm();

  return (
    <Container sx={containerStyles}>
      <Card sx={CardStyle}>
        <Box sx={LogoBoxStyle}>
          <Icon sx={IconStyle}>
            <LogoSVG />
          </Icon>
          <Typography variant="subtitle1" sx={LogoTextStyle}>
            Dashboard Kit
          </Typography>
        </Box>
        <Typography variant="h1" sx={MainTextStyle}>
          Sign Up
        </Typography>
        <Typography variant="subtitle1" sx={AdditionalTextStyle}>
          Create a new account
        </Typography>
        <Box
          component="form"
          sx={FormStyle}
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

          <Button
            sx={ButtonStyle}
            type="submit"
            variant="contained"
            color="primary"
          >
            Register
          </Button>
        </Box>
      </Card>
    </Container>
  );
};

export default SignUp;
