import { Box } from "@mui/system";

import { InputErrorMessage } from "../../../types/inputs";
import {
  ErrorValidationText,
  StyledLabel,
  StyledTextField,
} from "../StandardInput/styled";
import { dateValidation } from "../../../constants/validation";

interface IDateInputProps {
  registerName: string;
  label: string;
  errorMessage: InputErrorMessage;
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
      {errorMessage && (
        <ErrorValidationText>{String(errorMessage)}</ErrorValidationText>
      )}
    </Box>
  );
};

export default DateInput;
