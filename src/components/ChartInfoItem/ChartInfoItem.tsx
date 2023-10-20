import { StyledBox, MainText, ValueText } from "./styled";

interface IChartInfoItemProps {
  text: string;
  value: string;
}

const ChartInfoItem = ({ text, value }: IChartInfoItemProps) => {
  return (
    <StyledBox>
      <MainText>{text}</MainText>
      <ValueText>{value}</ValueText>
    </StyledBox>
  );
};

export default ChartInfoItem;
