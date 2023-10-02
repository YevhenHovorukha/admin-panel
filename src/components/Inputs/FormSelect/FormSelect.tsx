import { Box, FormControl, InputLabel, MenuItem } from "@mui/material";

import { StyledLabel } from "../StandardInput/styled";

import { StyledSelect } from "./styled";

interface IFormSelect {
  registerName: string;
  label: string;
  register: (registerName: string) => {};
}

const FormSelect = ({ register, label, registerName }: IFormSelect) => {
  return (
    <Box>
      <StyledLabel>Choose priority</StyledLabel>
      <FormControl fullWidth>
        <InputLabel>Priority</InputLabel>
        <StyledSelect
          {...register("priority")}
          label="priority"
          defaultValue=""
        >
          <MenuItem value="high">High</MenuItem>
          <MenuItem value="low">Low</MenuItem>
          <MenuItem value="normal">Normal</MenuItem>
        </StyledSelect>
      </FormControl>
    </Box>
  );
};

export default FormSelect;
