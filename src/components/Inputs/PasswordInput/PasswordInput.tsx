import { useState } from "react";
import { Box } from "@mui/system";

import { ReactComponent as EyeIcon } from "../../../assets/logos/isVisible.svg";
import {
  ErrorValidationText,
  StyledLabel,
  StyledTextField,
} from "../StandardInput/styled";
import { passwordValidation } from "../../../constants/validation";

import { StyledIconButton } from "./styled";

interface IPasswordInputProps {
  text: string;
  registerName: string;
  label: string;
  errorMessage: string;
  register: (registerName: string, options: Object) => {};
}

const PasswordInput = ({
  text,
  register,
  label,
  registerName,
  errorMessage,
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
        {...register(registerName, passwordValidation)}
        InputProps={Icon}
        type={isVisible ? "text" : "password"}
      />
      {errorMessage !== "undefined" && (
        <ErrorValidationText>{errorMessage}</ErrorValidationText>
      )}
    </Box>
  );
};

export default PasswordInput;
