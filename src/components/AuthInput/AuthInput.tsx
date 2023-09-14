import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/system";

import EyeIcon from "../../assets/logos/isVisible";

import { StyledTextField, StyledLabel } from "./styles";

interface IAuthInputProps {
  text: string;
  registerName: string;
  label: string;
  register: (registerName: string) => {};
  isPassword?: boolean;
}

const AuthInput = ({
  text,
  register,
  label,
  registerName,
  isPassword = false,
}: IAuthInputProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const handlerVisible = () => {
    setIsVisible((prevState) => !prevState);
  };
  return (
    <Box>
      <StyledLabel>{label}</StyledLabel>
      <StyledTextField
        placeholder={text}
        {...register(registerName)}
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
    </Box>
  );
};

export default AuthInput;
