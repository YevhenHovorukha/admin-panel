import { useState } from "react";
import { TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import styled from "styled-components";

import EyeIcon from "../../assets/logos/isVisible";

interface IAuthInputProps {
  text: string;
  registerName: string;
  register: (registerName: string) => {};
  isPassword?: boolean;
}

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
                  <EyeIcon />
                </IconButton>
              ),
            }
          : {}
      }
      type={isVisible ? "password" : "text"}
    />
  );
};

const StyledTextField = styled(TextField)`
  padding: 0;
  margin-top: 6px;
  width: 100%;
`;

export default AuthInput;
