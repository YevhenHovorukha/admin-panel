import { useState } from "react";
import { Button, TextField } from "@mui/material";
import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import SVGinvisible from "../../assets/logos/isVisible";

interface IAuthInputProps {
  text: string;
  registerName: string;
  register: (registerName: string) => {};
  isPassword?: boolean;
}

const StyledTextField = styled(TextField)`
  padding: 0;
  margin-top: 6px;
  width: 100%;
`;

const AuthInput = ({
  text,
  register,
  registerName,
  isPassword = false,
}: IAuthInputProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const handlerVisible = () => {
    setIsVisible((prevState) => !prevState);
  };
  return (
    <StyledTextField
      placeholder={text}
      {...register(registerName)}
      inputProps={{
        style: { padding: "0 16px" },
      }}
      InputProps={
        isPassword
          ? {
              endAdornment: (
                <IconButton edge="end" onClick={handlerVisible}>
                  <SVGinvisible />
                </IconButton>
              ),
            }
          : {}
      }
      type={isVisible ? "password" : "text"}
    />
  );
};

export default AuthInput;
