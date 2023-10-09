import { Box } from "@mui/material";

import { ReactComponent as PlusIcon } from "../../../assets/logos/plus.svg";
import { InputErrorMessage } from "../../../types/inputs";
import { ErrorValidationText } from "../StandardInput/styled";

import {
  StyledInput,
  FileInputText,
  GrayCircle,
  StyledLabel,
  StyledAvatar,
} from "./styled";

interface IFileInputProps {
  registerName: string;
  register: (registerName: string, options: Object) => {};
  url: string;
  errorMessage: InputErrorMessage;
}

const FileInput = ({
  registerName,
  register,
  url,
  errorMessage,
}: IFileInputProps) => {
  const picture = url ? (
    <StyledAvatar src={url} alt="picture" />
  ) : (
    <GrayCircle>
      <PlusIcon />
    </GrayCircle>
  );

  return (
    <Box>
      <StyledLabel htmlFor="fileInput">
        {picture}
        <FileInputText>Add Photo</FileInputText>
      </StyledLabel>

      <StyledInput
        type="file"
        {...register(registerName, { required: "Please add file" })}
        accept=".jpg, .jpeg, .png, .gif"
        id="fileInput"
      />
      {errorMessage && (
        <ErrorValidationText>{String(errorMessage)}</ErrorValidationText>
      )}
    </Box>
  );
};

export default FileInput;
