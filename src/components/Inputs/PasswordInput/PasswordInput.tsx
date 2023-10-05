import { useState } from "react";
import { Box } from "@mui/system";
import { FieldErrors } from "react-hook-form";

import { ReactComponent as EyeIcon } from "../../../assets/logos/isVisible.svg";
import { StyledLabel, StyledTextField } from "../StandardInput/styled";
import { passwordValidation } from "../../../validation/validation";
import { ErrorValidationText } from "../../../validation/styled";

import { StyledIconButton } from "./styled";

interface IPasswordInputProps {
  text: string;
  registerName: string;
  label: string;
  errors: FieldErrors;
  register: (registerName: string, options: Object) => {};
}

const PasswordInput = ({
  text,
  register,
  label,
  registerName,
  errors,
}: IPasswordInputProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const handlerVisible = () => {
    setIsVisible((prevState) => !prevState);
  };

  const errorMessage = errors[registerName]?.message;
  const stringErrorMessage = String(errorMessage);

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
      {errorMessage && (
        <ErrorValidationText>{stringErrorMessage}</ErrorValidationText>
      )}
    </Box>
  );
};

export default PasswordInput;
