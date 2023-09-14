import { useState } from "react";
import { Box } from "@mui/system";

import EyeIcon from "../../assets/logos/isVisible";

import { StyledTextField, StyledLabel, StyledIconButton } from "./styles";

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
                  <StyledIconButton edge="end" onClick={handlerVisible}>
                    <EyeIcon />
                  </StyledIconButton>
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
