import { useState } from "react";
import { Box } from "@mui/system";

import { ReactComponent as EyeIcon } from "../../../assets/logos/isVisible.svg";
import { StyledLabel, StyledTextField } from "../StandardInput/styled";

import { StyledIconButton } from "./styled";

interface IPasswordInputProps {
  text: string;
  registerName: string;
  label: string;
  register: (registerName: string) => {};
}

const PasswordInput = ({
  text,
  register,
  label,
  registerName,
}: IPasswordInputProps) => {
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
        InputProps={Icon}
        type={isVisible ? "text" : "password"}
      />
    </Box>
  );
};

export default PasswordInput;
