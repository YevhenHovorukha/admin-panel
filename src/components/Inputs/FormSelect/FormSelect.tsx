import { Box, FormControl, InputLabel, MenuItem } from "@mui/material";

import { InputErrorMessage } from "../../../types/inputs";
import { ErrorValidationText, StyledLabel } from "../StandardInput/styled";

import { StyledSelect } from "./styled";

interface IFormSelect {
  registerName: string;
  label: string;
  errorMessage: InputErrorMessage;
  register: (registerName: string, options: Object) => {};
}

const FormSelect = ({
  register,
  label,
  registerName,
  errorMessage,
}: IFormSelect) => {
  return (
    <Box>
      <StyledLabel>Choose priority</StyledLabel>
      <FormControl fullWidth>
        <InputLabel>Priority</InputLabel>
        <StyledSelect
          {...register(registerName, { required: "Please select a priority" })}
          label={label}
          defaultValue=""
        >
          <MenuItem value="high">High</MenuItem>
          <MenuItem value="low">Low</MenuItem>
          <MenuItem value="normal">Normal</MenuItem>
        </StyledSelect>
      </FormControl>
      {errorMessage && (
        <ErrorValidationText>{String(errorMessage)}</ErrorValidationText>
      )}
    </Box>
  );
};

export default FormSelect;
