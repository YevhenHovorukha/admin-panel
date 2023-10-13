import { InfoTitle, InfoValue, StyledBox } from "./styled";

interface IInfoBoxProps {
  title: string;
  value: number;
}

const InfoBox = ({ title, value }: IInfoBoxProps) => {
  return (
    <StyledBox>
      <InfoTitle>{title}</InfoTitle>
      <InfoValue>{value}</InfoValue>
    </StyledBox>
  );
};

export default InfoBox;
