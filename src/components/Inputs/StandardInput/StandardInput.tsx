import { Box } from "@mui/system";

import { InputErrorMessage } from "../../../types/inputs";

import { StyledTextField, StyledLabel, ErrorValidationText } from "./styled";

interface IStanderdInputProps {
  text: string;
  registerName: string;
  label: string;
  options: Object;
  register: (registerName: string, options: Object) => {};
  errorMessage: InputErrorMessage;
}

const StandardInput = ({
  text,
  register,
  label,
  registerName,
  options,
  errorMessage,
}: IStanderdInputProps) => {
  return (
    <Box>
      <StyledLabel>{label}</StyledLabel>
      <StyledTextField
        placeholder={text}
        {...register(registerName, options)}
        type="text"
      />
      {errorMessage && (
        <ErrorValidationText>{String(errorMessage)}</ErrorValidationText>
      )}
    </Box>
  );
};

export default StandardInput;
