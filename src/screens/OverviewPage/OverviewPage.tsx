import ChartBox from "../../components/ChartBox";
import OverviewChart from "../../components/ChartComponents/OverviewChart";
import ChartInfoItem from "../../components/ChartInfoItem";
import InfoBox from "../../components/InfoBox";
import { DATA_INFO_BOX, CHART_BOX_DATA } from "../../constants/mocks";

import {
  InfoBoxContainer,
  MainOverview,
  ChartContainer,
  ChartInfoContainer,
} from "./styled";

const OverviewPage = () => {
  return (
    <>
      <InfoBoxContainer>
        {DATA_INFO_BOX.map((infoData) => (
          <InfoBox key={infoData.id} {...infoData} />
        ))}
      </InfoBoxContainer>
      <MainOverview>
        <ChartContainer>
          <ChartBox></ChartBox>
          <OverviewChart />
        </ChartContainer>
        <ChartInfoContainer>
          {CHART_BOX_DATA.map((item) => (
            <ChartInfoItem key={item.id} {...item} />
          ))}
        </ChartInfoContainer>
      </MainOverview>
    </>
  );
};

export default OverviewPage;
