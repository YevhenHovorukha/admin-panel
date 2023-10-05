import { Box } from "@mui/system";
import { FieldErrors } from "react-hook-form";

import { StyledLabel, StyledTextField } from "../StandardInput/styled";
import { dateValidation } from "../../../validation/validation";
import { ErrorValidationText } from "../../../validation/styled";

interface IDateInputProps {
  registerName: string;
  label: string;
  errors: FieldErrors;
  register: (registerName: string, options: Object) => {};
}

const DateInput = ({
  register,
  label,
  registerName,
  errors,
}: IDateInputProps) => {
  const errorMessage = errors[registerName]?.message;
  const stringErrorMessage = String(errorMessage);

  return (
    <Box>
      <StyledLabel>{label}</StyledLabel>
      <StyledTextField
        {...register(registerName, dateValidation)}
        type="date"
      />
      {errorMessage && (
        <ErrorValidationText>{stringErrorMessage}</ErrorValidationText>
      )}
    </Box>
  );
};

export default DateInput;
