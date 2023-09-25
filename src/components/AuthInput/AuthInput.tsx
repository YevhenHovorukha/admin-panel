import { useState } from "react";
import { Box } from "@mui/system";

import { ReactComponent as EyeIcon } from "../../assets/logos/isVisible.svg";

import { StyledTextField, StyledLabel, StyledIconButton } from "./styled";

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

  const Icon = {
    endAdornment: (
      <StyledIconButton edge="end" onClick={handlerVisible}>
        <EyeIcon />
      </StyledIconButton>
    ),
  };

  return (
    <Box>
      <StyledLabel>{label}</StyledLabel>
      <StyledTextField
        placeholder={text}
        {...register(registerName)}
        InputProps={isPassword ? Icon : {}}
        type={isVisible ? "password" : "text"}
      />
    </Box>
  );
};

export default AuthInput;
