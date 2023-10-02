import { Box } from "@mui/system";

import { StyledLabel, StyledTextField } from "../StandardInput/styled";

interface IDateInputProps {
  registerName: string;
  label: string;
  register: (registerName: string) => {};
}

const DateInput = ({ register, label, registerName }: IDateInputProps) => {
  return (
    <Box>
      <StyledLabel>{label}</StyledLabel>
      <StyledTextField {...register(registerName)} type="date" />
    </Box>
  );
};

export default DateInput;
