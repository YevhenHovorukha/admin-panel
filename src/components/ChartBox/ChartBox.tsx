import { getCurrentFormattedDate } from "./helpers";
import {
  ChartHeadText,
  ChartInfoText,
  InfoBox,
  LineBox,
  Line,
  MarkerBox,
} from "./styled";

const ChartBox = () => {
  const currentFormattedDate = getCurrentFormattedDate();
  return (
    <>
      <ChartHeadText variant="h2">Today’s trends</ChartHeadText>
      <InfoBox>
        <ChartInfoText>as of {currentFormattedDate}</ChartInfoText>
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
    </>
  );
};

export default ChartBox;
