import { Box } from "@mui/system";
import { FieldErrors } from "react-hook-form";

import {
  ErrorValidationText,
  StyledLabel,
  StyledTextField,
} from "../StandardInput/styled";
import { dateValidation } from "../../../constants/validation";

interface IDateInputProps {
  registerName: string;
  label: string;
  errorMessage: string;
  register: (registerName: string, options: Object) => {};
}

const DateInput = ({
  register,
  label,
  registerName,
  errorMessage,
}: IDateInputProps) => {
  return (
    <Box>
      <StyledLabel>{label}</StyledLabel>
      <StyledTextField
        {...register(registerName, dateValidation)}
        type="date"
      />
      {errorMessage !== "undefined" && (
        <ErrorValidationText>{errorMessage}</ErrorValidationText>
      )}
    </Box>
  );
};

export default DateInput;
