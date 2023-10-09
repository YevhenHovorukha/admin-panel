import { useForm } from "react-hook-form";

import FileInput from "../Inputs/FileInput";
import FormBox from "../FormBox";
import StandardInput from "../Inputs/StandardInput";
import FormButton from "../FormButton";
import {
  fullNameValidation,
  emailValidation,
  addressValidation,
} from "../../constants/validation";

import { CancelText, MainModalText, ModalBox, StyledModal } from "./styled";

interface ITicketsModalProps {
  open: boolean;
  handleClose: () => void;
}

const ContactsModal = ({ open, handleClose }: ITicketsModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const avatar = watch("avatar");

  const avatarURL = avatar && avatar[0] ? URL.createObjectURL(avatar[0]) : "";

  return (
    <StyledModal open={open} onClose={handleClose}>
      <ModalBox>
        <MainModalText variant="h2">Add new contact</MainModalText>
        <FormBox
          component="form"
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <FileInput
            register={register}
            registerName="avatar"
            url={avatarURL}
            errorMessage={errors["avatar"]?.message}
          />

          <StandardInput
            text="First Name"
            register={register}
            registerName={"firstName"}
            label="First name"
            options={fullNameValidation}
            errorMessage={errors["firstName"]?.message}
          />

          <StandardInput
            text="Last Name"
            register={register}
            registerName={"lastName"}
            label="Last name"
            options={fullNameValidation}
            errorMessage={errors["lastName"]?.message}
          />

          <StandardInput
            text="Email address"
            register={register}
            options={emailValidation}
            registerName={"email"}
            label="email"
            errorMessage={errors["email"]?.message}
          />

          <StandardInput
            text="Address"
            register={register}
            options={addressValidation}
            registerName={"address"}
            label="Address"
            errorMessage={errors["address"]?.message}
          />

          <FormButton type="submit" variant="contained" color="primary">
            Save
          </FormButton>
        </FormBox>
        <CancelText onClick={handleClose}>Cancel</CancelText>
      </ModalBox>
    </StyledModal>
  );
};

export default ContactsModal;
