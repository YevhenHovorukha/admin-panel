import { Box } from "@mui/system";

import { StyledTextField, StyledLabel } from "./styled";

interface IStanderdInputProps {
  text: string;
  registerName: string;
  label: string;
  register: (registerName: string) => {};
}

const StandardInput = ({
  text,
  register,
  label,
  registerName,
}: IStanderdInputProps) => {
  return (
    <Box>
      <StyledLabel>{label}</StyledLabel>
      <StyledTextField
        placeholder={text}
        {...register(registerName)}
        type="text"
      />
    </Box>
  );
};

export default StandardInput;
