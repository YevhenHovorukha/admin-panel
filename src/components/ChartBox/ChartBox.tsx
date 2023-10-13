import {
  ChartContainer,
  ChartHeadText,
  ChartInfoText,
  InfoBox,
  LineBox,
  Line,
  MarkerBox,
} from "./styled";

const ChartBox = () => {
  return (
    <ChartContainer>
      <ChartHeadText variant="h2">Today’s trends</ChartHeadText>
      <InfoBox>
        <ChartInfoText>as of 25 May 2019, 09:41 PM</ChartInfoText>
        <MarkerBox $Gap="56px">
          <MarkerBox>
            <LineBox>
              <Line $isBlue={true} />
            </LineBox>
            <ChartInfoText>Today</ChartInfoText>
          </MarkerBox>
          <MarkerBox>
            <LineBox>
              <Line />
            </LineBox>
            <ChartInfoText>Yestarday</ChartInfoText>
          </MarkerBox>
        </MarkerBox>
      </InfoBox>
    </ChartContainer>
  );
};

export default ChartBox;
