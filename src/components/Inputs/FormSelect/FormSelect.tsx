import { Box, FormControl, InputLabel, MenuItem } from "@mui/material";
import { FieldErrors } from "react-hook-form";

import { ErrorValidationText } from "../../../validation/styled";
import { StyledLabel } from "../StandardInput/styled";

import { StyledSelect } from "./styled";

interface IFormSelect {
  registerName: string;
  label: string;
  errors: FieldErrors;
  register: (registerName: string, options: Object) => {};
}

const FormSelect = ({ register, label, registerName, errors }: IFormSelect) => {
  const errorMessage = errors[registerName]?.message;
  const stringErrorMessage = String(errorMessage);

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
        <ErrorValidationText>{stringErrorMessage}</ErrorValidationText>
      )}
    </Box>
  );
};

export default FormSelect;
