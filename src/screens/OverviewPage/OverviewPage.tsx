import ChartBox from "../../components/ChartBox";
import OverviewChart from "../../components/ChartComponents/OverviewChart";
import InfoBox from "../../components/InfoBox";
import { DATA_INFO_BOX } from "../../constants/mocks";

import { InfoBoxContainer, MainOverview, ChartContainer } from "./styled";

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
          <ChartBox />
          <OverviewChart />
        </ChartContainer>
      </MainOverview>
    </>
  );
};

export default OverviewPage;
