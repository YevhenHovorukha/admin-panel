import { StyledBox, TicketName, TicketsValue } from "./styled";

interface IUnresolvedTicketProps {
  name: string;
  value: string;
}

const UnresolvedTicket = ({ name, value }: IUnresolvedTicketProps) => {
  return (
    <StyledBox>
      <TicketName>{name}</TicketName>
      <TicketsValue>{value}</TicketsValue>
    </StyledBox>
  );
};

export default UnresolvedTicket;
