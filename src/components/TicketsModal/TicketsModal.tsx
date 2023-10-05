import { useForm } from "react-hook-form";

import FormBox from "../FormBox";
import StandardInput from "../Inputs/StandardInput";
import FormButton from "../FormButton";
import DateInput from "../Inputs/DateInput";
import FormSelect from "../Inputs/FormSelect/FormSelect";
import {
  fullNameValidation,
  ticketDescriptionValidation,
} from "../../validation/validation";

import { CancelText, MainModalText, ModalBox, StyledModal } from "./styled";

interface ITicketsModalProps {
  open: boolean;
  handleClose: () => void;
}

const TicketsModal = ({ open, handleClose }: ITicketsModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <StyledModal open={open} onClose={handleClose}>
      <ModalBox>
        <MainModalText variant="h2">Add tickets</MainModalText>
        <FormBox
          component="form"
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <StandardInput
            text="Ticket details"
            register={register}
            registerName={"ticketDetails"}
            label="Add description"
            options={ticketDescriptionValidation}
            errors={errors}
          />

          <StandardInput
            text="Customer name"
            register={register}
            registerName={"customerName"}
            label="Name"
            options={fullNameValidation}
            errors={errors}
          />

          <DateInput
            register={register}
            registerName={"date"}
            label="Date"
            errors={errors}
          />

          <FormSelect
            register={register}
            registerName="priority"
            label="Priority"
            errors={errors}
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

export default TicketsModal;
