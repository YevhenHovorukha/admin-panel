import { Box } from "@mui/system";

import { StyledTextField, StyledLabel, ErrorValidationText } from "./styled";

interface IStanderdInputProps {
  text: string;
  registerName: string;
  label: string;
  options: Object;
  register: (registerName: string, options: Object) => {};
  errorMessage: string;
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
      {errorMessage !== "undefined" && (
        <ErrorValidationText>{errorMessage}</ErrorValidationText>
      )}
    </Box>
  );
};

export default StandardInput;
