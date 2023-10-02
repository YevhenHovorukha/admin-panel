import { useForm } from "react-hook-form";
import { Modal } from "@mui/material";

import FormBox from "../FormBox";
import StandardInput from "../Inputs/StandardInput";
import FormButton from "../FormButton";
import DateInput from "../Inputs/DateInput";
import FormSelect from "../Inputs/FormSelect/FormSelect";

import { CancelText, MainModalText, ModalBox } from "./styled";

interface ITicketsModalProps {
  open: boolean;
  handleClose: () => void;
}

const TicketsModal = ({ open, handleClose }: ITicketsModalProps) => {
  const { register, handleSubmit } = useForm();
  return (
    <Modal open={open} onClose={handleClose}>
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
          />
          <StandardInput
            text="Customer name"
            register={register}
            registerName={"customerName"}
            label="Name"
          />

          <DateInput register={register} registerName={"date"} label="Date" />

          <FormSelect
            register={register}
            registerName={"priority"}
            label="Priority"
          />

          <FormButton type="submit" variant="contained" color="primary">
            Save
          </FormButton>
        </FormBox>
        <CancelText onClick={handleClose}>Cancel</CancelText>
      </ModalBox>
    </Modal>
  );
};

export default TicketsModal;
