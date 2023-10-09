import { useForm } from "react-hook-form";

import FormBox from "../FormBox";
import StandardInput from "../Inputs/StandardInput";
import FormButton from "../FormButton";
import DateInput from "../Inputs/DateInput";
import FormSelect from "../Inputs/FormSelect/FormSelect";
import {
  fullNameValidation,
  ticketDescriptionValidation,
} from "../../constants/validation";

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
            errorMessage={errors["ticketDetails"]?.message}
          />

          <StandardInput
            text="Customer name"
            register={register}
            registerName={"customerName"}
            label="Name"
            options={fullNameValidation}
            errorMessage={errors["customerName"]?.message}
          />

          <DateInput
            register={register}
            registerName={"date"}
            label="Date"
            errorMessage={errors["date"]?.message}
          />

          <FormSelect
            register={register}
            registerName="priority"
            label="Priority"
            errorMessage={errors["priority"]?.message}
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
