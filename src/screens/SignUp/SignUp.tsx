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
import MySvgFile from "../../assets/logos/authLogo";
import { useForm, SubmitHandler } from "react-hook-form";

const SignUp = () => {
  const [isVisible, setIsVisible] = useState({
    passwordInput: false,
    confirmInput: false,
  });

  const { register, handleSubmit } = useForm();

  const handlerIsVisible = (nameInput: string) => {
    setIsVisible((prevState) => {
      if (nameInput === "passwordInput") {
        return { ...prevState, [nameInput]: !prevState[nameInput] };
      } else {
        return { ...prevState, confirmInput: !prevState.confirmInput };
      }
    });
  };

  return (
    <Container sx={containerStyles}>
      <Card sx={CardStyle}>
        <Box sx={LogoBoxStyle}>
          <Icon sx={IconStyle}>
            <MySvgFile />
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
          <Typography variant="subtitle1" sx={LabelStyle}>
            email
          </Typography>
          <TextField
            sx={InputStyle}
            inputProps={{
              style: InputProps,
            }}
            placeholder="Email address"
            {...register("email")}
          />
          <Typography variant="subtitle1" sx={LabelStyle}>
            First name
          </Typography>
          <TextField
            sx={InputStyle}
            inputProps={{
              style: InputProps,
            }}
            placeholder="First name"
            {...register("firstName")}
          />
          <Typography variant="subtitle1" sx={LabelStyle}>
            LAST name
          </Typography>
          <TextField
            sx={InputStyle}
            inputProps={{
              style: InputProps,
            }}
            placeholder="Last name"
            {...register("lastName")}
          />
          <Typography variant="subtitle1" sx={LabelStyle}>
            password
          </Typography>
          <TextField
            sx={InputStyle}
            inputProps={{
              style: InputProps,
            }}
            placeholder="Password"
            {...register("password")}
            InputProps={{
              endAdornment: (
                <IconButton
                  edge="end"
                  onClick={() => handlerIsVisible("passwordInput")}
                >
                  <SVGinvisible />
                </IconButton>
              ),
            }}
            type={isVisible.passwordInput ? "text" : "password"}
          />
          <Typography variant="subtitle1" sx={LabelStyle}>
            confirm password
          </Typography>
          <TextField
            sx={InputStyle}
            inputProps={{
              style: InputProps,
            }}
            InputProps={{
              endAdornment: (
                <IconButton
                  edge="end"
                  onClick={() => handlerIsVisible("confirmInput")}
                >
                  <SVGinvisible />
                </IconButton>
              ),
            }}
            placeholder="Password"
            {...register("confirmPassword")}
            type={isVisible.confirmInput ? "text" : "password"}
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
