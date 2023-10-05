import { Box } from "@mui/system";
import { FieldErrors } from "react-hook-form";

import { ErrorValidationText } from "../../../validation/styled";

import { StyledTextField, StyledLabel } from "./styled";

interface IStanderdInputProps {
  text: string;
  registerName: string;
  label: string;
  options: Object;
  register: (registerName: string, options: Object) => {};
  errors: FieldErrors;
}

const StandardInput = ({
  text,
  register,
  label,
  registerName,
  options,
  errors,
}: IStanderdInputProps) => {
  const errorMessage = errors[registerName]?.message;
  const stringErrorMessage = String(errorMessage);
  return (
    <Box>
      <StyledLabel>{label}</StyledLabel>
      <StyledTextField
        placeholder={text}
        {...register(registerName, options)}
        type="text"
      />
      {errorMessage && (
        <ErrorValidationText>{stringErrorMessage}</ErrorValidationText>
      )}
    </Box>
  );
};

export default StandardInput;
