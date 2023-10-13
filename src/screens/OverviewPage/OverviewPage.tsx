import ChartBox from "../../components/ChartBox";
import InfoBox from "../../components/InfoBox";
import { DATA_INFO_BOX } from "../../constants/mocks";

import { InfoBoxContainer, MainOverview } from "./styled";

const OverviewPage = () => {
  return (
    <>
      <InfoBoxContainer>
        {DATA_INFO_BOX.map((infoData) => (
          <InfoBox key={infoData.id} {...infoData} />
        ))}
      </InfoBoxContainer>
      <MainOverview>
        <ChartBox></ChartBox>
      </MainOverview>
    </>
  );
};

export default OverviewPage;
